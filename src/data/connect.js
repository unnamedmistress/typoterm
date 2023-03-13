import mongoose from 'mongoose';


const connectionPromise = mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB' + process.env.REACT_APP_MONGODB_URI);
}).catch((err) => console.error('Could not connect to MongoDB', err));

mongoose.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  }
});


export default async function connect() {
  await connectionPromise;
  return {
    connection: mongoose.connection,
  };
}
