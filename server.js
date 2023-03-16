import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import User from './data/User.js';
import connect from './data/connect.js';
import path from 'path';
import setupRoutes from './routes.js'; // Import setupRoutes function from routes.js

// Set up environment variables and constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the express app and middleware
const app = express();
const apiRouter = express.Router(); // Create an instance of express.Router

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

setupRoutes(apiRouter); // Use setupRoutes to set up routes on the apiRouter
app.use(apiRouter); // Use apiRouter in the main app

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
