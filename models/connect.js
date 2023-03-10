import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: new URL('./.env', import.meta.url).pathname });

const connectionPromise = mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => console.error('Could not connect to MongoDB', err));

mongoose.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  }
});

const users = [
  { username: "user6", password: "password1", userResponseEssay: "response1", apiResponse: "api response1", userResponseCover: "response1", apiResponseCover: "api response1", userResponseOutline: "response1", apiResponseOutline: "api response1" },
  { username: "user5", password: "password2", userResponseEssay: "response2", apiResponse: "api response2", userResponseCover: "response2", apiResponseCover: "api response2", userResponseOutline: "response2", apiResponseOutline: "api response2" },
  { username: "user6", password: "password3", userResponseEssay: "response3", apiResponse: "api response3", userResponseCover: "response3", apiResponseCover: "api response3", userResponseOutline: "response3", apiResponseOutline: "api response3" }
];

export default async function connect() {
  await connectionPromise;
  return {
    connection: mongoose.connection,
    users,
  };
}
