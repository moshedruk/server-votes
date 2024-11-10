import mongoose from 'mongoose'; 
import { IUser } from '../interface/user';

// 1. Create an interface representing a document in MongoDB.

// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true ,unique: true},
  password: { type: String, required: true ,unique: true},
  isAdmin: { type: Boolean, default: false},
  hasVoted: { type: Boolean, default: false},
  votedFor: { type: mongoose.Schema.Types.ObjectId, ref: 'candidates'}
});
// 3. Create a Model.
const UserModle:mongoose.Model<IUser> = mongoose.model('users', userSchema)
export default UserModle
