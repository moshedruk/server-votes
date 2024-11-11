import { connect } from "mongoose";

export const connectToMongo = async () => {
  try {
    await connect('mongodb://localhost:27017/Votes');
    console.log(`connected to mongo`);
  } catch (err) {
    console.log("Can't connect to mongo", err);
  }
};