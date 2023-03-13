import User from './User.js';
import connect from './connect.js';

const sampleData = [
  { 
    username: 'user1',
    password: 'password1',
    userResponseEssay: 'response1',
    apiResponse: 'api response1',
    userResponseCover: 'response1',
    apiResponseCover: 'api response1',
    userResponseOutline: 'response1',
    apiResponseOutline: 'api response1'
  },
  { 
    username: 'user2',
    password: 'password2',
    userResponseEssay: 'response2',
    apiResponse: 'api response2',
    userResponseCover: 'response2',
    apiResponseCover: 'api response2',
    userResponseOutline: 'response2',
    apiResponseOutline: 'api response2'
  },
  { 
    username: 'user3',
    password: 'password3',
    userResponseEssay: 'response3',
    apiResponse: 'api response3',
    userResponseCover: 'response3',
    apiResponseCover: 'api response3',
    userResponseOutline: 'response3',
    apiResponseOutline: 'api response3'
  },
];

const seedData = async () => {
  try {
    const { connection } = await connect();
    console.log('Connected to database');

    await User.insertMany(sampleData);

    console.log('Sample data seeded successfully!');
    connection.close();
  } catch (err) {
    console.error('Could not seed sample data:', err);
  }
};

seedData();
export default seedData;
