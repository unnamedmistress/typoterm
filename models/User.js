import mongoose from 'mongoose';
import dotenv from 'dotenv';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //add response to schema and result from API call here
});

export default mongoose.model('User', userSchema);
