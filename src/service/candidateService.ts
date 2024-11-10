// // import { IUser } from "../interface/userInterface";
// // import TodoModle from "../models/todoModel";
// // import UserModle from "../models/userModel"

// export const createUser = async (user:IUser):Promise<IUser>=>{
//     try{
//         // find  if user is already
//         const existingUser = await UserModle.findOne({name: user.name}) as IUser;
//         if(existingUser){
//             if (existingUser.todos.includes(user.todos[0])) {
//                 throw new Error('Title already exists for this user');
//             }
//             existingUser.todos.push(user.todos[0]);
//             await TodoModle.updateOne(
//                 { _id: user.todos[0] },  
//                 { $set: { status: true } }  
//             );
//             console.log(user.todos[0]);
//             await existingUser.save()
//             return existingUser
//         }
//         // find if mission is already
        
//         // create new user and save it to the database  (we assume that user.name is unique)
//         // i need to get mor informtion of newUser
//        const {name,todos} = user 
//        // find mission to create new status 
       
//        const dbUser = new UserModle({
//        name,   
//        todos            
//        });
//        await TodoModle.updateOne(
//         { _id: user.todos[0] },  
//         { $set: { status: true } }  
//         );        
//        await dbUser.save()
//         return user;
//     }catch(err){
//         console.log(err);
//        throw err
//     }
// }

// export const GetUser = async() => {
//     try{
//         // find all users
//         const list = await UserModle.find().populate("todos");
//         return users;
//     }catch(err){
//         console.log(err);
//         throw err
//     }
// }