import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';;
import cors from 'cors';
import User from './src/data/User.js';
import connect from './src/data/connect.js';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { authMiddleware } from './src/utils/auth.js';

// Set up environment variables and constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Initialize the express app and middleware
const app = express();
app.us (authMiddleware)
app.use(express.json());
app.use(express.static(__dirname + "/build", { 
  setHeaders: (res, path) => {
    if (path.endsWith(".js")) {
      res.setHeader("Content-Type", "text/javascript");
    }
  }
}));

app.use(helmet());
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});
app.use(cors());

connect();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

// POST /api/signup
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  console.log(`Received signup request for username: ${username}, password: ${password}`);
  try {
    // check if user already exists in the database
    const user = await User.findOne({ username });
    if (user) {
      console.log('Username already exists');
      return res.status(400).json({ error: 'Username already exists' });
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user in the database with the hashed password
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    console.log('New user', newUser);
    await newUser.save();

    res.status(200).json({ success: true, message: 'Signup successful' });
  } catch (error) {
    console.error('Error while signing up user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  console.log('user', user);
  console.log('username', username);
  console.log('password', password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // compare the hashed password with the given password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // create JWT token and send it to the client
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header('auth-token', token).status(200).json({ message: 'Login successful', token });
});
app.get('/api/user', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.put('/api/user/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { userResponseEssay, apiResponse, userResponseCover, apiResponseCover, userResponseOutline, apiResponseOutline } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, {
      userResponseEssay,
      apiResponse,
      userResponseCover,
      apiResponseCover,
      userResponseOutline,
      apiResponseOutline
    });
    res.status(200).json({ success: true, message: 'Responses saved successfully', user });
  } catch (error) {
    console.error('Error while saving responses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
