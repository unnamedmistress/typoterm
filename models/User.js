import mongoose from 'mongoose';
import dotenv from 'dotenv';

const userSchema = new mongoose.Schema({
username: { type: String, required: true, unique: true },
password: { type: String, required: true },
userResponse: { type: String, default: '' },
apiResponse: { type: String, default: '' },
});

export default mongoose.model('User', userSchema);
