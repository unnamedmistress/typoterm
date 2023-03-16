import express from 'express';
import mongoose from 'mongoose';
import User from './data/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {authMiddleware} from './routes/utils/auth.js';

const setupRoutes = (apiRouter) => {

    apiRouter.post('/api/login', async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        console.log('user', user);
        console.log('username', username);
        console.log('password', password);
      
        if (!user) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
      
        if (password.trim() !== user.password.trim()) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
      
        res.status(200).json({ message: 'Login successful' });
      });
    
      // POST /api/signup
      apiRouter.post('/api/signup', async (req, res) => {
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
      
      apiRouter.get('/api/user', authMiddleware, async (req, res) => {
        const { username } = req.user;
        try {
          const user = await User.findOne({ username });
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
          res.status(200).json({ success: true, user });
        } catch (error) {
          console.error('Error while getting user:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
      
      
      // PUT /api/user/:id
      apiRouter.put('/api/user/:id/responses/:responseId', authMiddleware, async (req, res) => {
        const { id, responseId } = req.params;
        const { essay, cover } = req.body;
        try {
          const user = await User.findOneAndUpdate({ _id: id, 'userResponses.responseId': responseId }, {
            $set: {
              'userResponses.$.essay': essay,
              'userResponses.$.cover': cover
            },
          });
      
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
          res.status(200).json({ success: true, message: 'Response updated successfully' });
        } catch (error) {
          console.error('Error while updating response:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
      
      // DELETE /api/user/:id
      apiRouter.delete('/api/user/:id', authMiddleware, async (req, res) => {
        const { id } = req.params;
        try {
          const user = await User.findByIdAndDelete(id);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          res.status(200).json({ success: true, message: 'User deleted successfully' });
        } catch (error) {
          console.error('Error while deleting user:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
      apiRouter.post('/api/user/:id/responses', authMiddleware, async (req, res) => {
        const { id } = req.params;
        const { essay, cover, createdAt } = req.body; // Add createdAt field
        const responseId = mongoose.Types.ObjectId();
      
        try {
          const user = await User.findByIdAndUpdate(id, {
            $push: {
              userResponses: {
                responseId,
                essay,
                cover,
                createdAt, // Save createdAt field
              },
            },
          });
      
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
          res.status(200).json({ success: true, message: 'Response added successfully', responseId });
        } catch (error) {
          console.error('Error while adding response:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
      apiRouter.get('/api/user/:id/responses', authMiddleware, async (req, res) => {
        const { id } = req.params;
      
        try {
          const user = await User.findById(id);
      
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
          res.status(200).json({ success: true, responses: user.userResponses });
        } catch (error) {
          console.error('Error while fetching responses:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
      apiRouter.delete('/api/user/:id/responses/:responseId', authMiddleware, async (req, res) => {
        const { id, responseId } = req.params;
      
        try {
          const user = await User.findByIdAndUpdate(id, {
            $pull: {
              userResponses: { responseId },
            },
          });
      
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
          res.status(200).json({ success: true, message: 'Response deleted successfully' });
        } catch (error) {
          console.error('Error while deleting response:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
  };

  export default setupRoutes;