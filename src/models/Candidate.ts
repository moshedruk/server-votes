
// import mongoose from 'mongoose'; 

// // 1. Create an interface representing a document in MongoDB.

// // 2. Create a Schema corresponding to the document interface.
// const userSchema = new mongoose.Schema<IUser>({
//   name: { type: String, required: true ,unique: true},
//   image: { type: String},
//   votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]  
// });
// // 3. Create a Model.
// const UserModle:mongoose.Model<IUser> = mongoose.model('candidates', userSchema)
// export default UserModle