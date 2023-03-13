import mongoose from 'mongoose';
import connect from './connect.js';


const userSchema = new mongoose.Schema({
username: { type: String, required: true, unique: true },
password: { type: String, required: true },
userResponseEssay: { type: String, default: '' },
apiResponse: { type: String, default: '' },
userResponseCover: { type: String, default: '' },
apiResponseCover: { type: String, default: '' },
userResponseOutline: { type: String, default: '' },
apiResponseOutline: { type: String, default: '' },
});

export default mongoose.model('User', userSchema);
