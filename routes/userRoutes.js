import express from 'express';
import User from '../data/User.js';
import bcrypt from 'bcrypt';
import { signToken } from  './utils/auth.js';

const router = express.Router();

// POST /api/signup
router.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  console.log(`Signup with username: ${username} and password: ${password}`); // Add this line
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();
console.log(`New user created with username: ${username} and password: ${password}`); 
console.log(`New user created with username: ${username} and password: ${hashedPassword}`);
    res.status(200).json({ success: true, message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/login
// POST /api/login
router.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(`Trying to log in with username: ${username} and password: ${password}`); // Add this line
    const user = await User.findOne({ username });
  
    if (!user) {
      console.log('User not found'); // Add this line
      console.log( `User with username ${username} not found and password ${password}`); // Add this line
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(`Password comparison result: ${validPassword}`); // Add this line
    console.log(`Stored password hash: ${user.password}`); 
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    const tokenToSend = signToken({ email: user.email, username: user.username, _id: user._id });
    res.header('auth-token', tokenToSend).status(200).json({ message: 'Login successful', token: tokenToSend });
  });
  

// PUT /api/user/:id
router.put('/api/user/:id', async (req, res) => {
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
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
