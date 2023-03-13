import mongoose from 'mongoose';


const connectionPromise = mongoose.connect("mongodb+srv://momchrysti:mA2mrD-khF%403NLU@cluster0.p1qcsqd.mongodb.net/typodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB' );
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
