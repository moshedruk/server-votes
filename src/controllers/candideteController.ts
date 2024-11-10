
// import { Request, Response } from "express";


// // Function for creating a new user in the database
// export const createNewUser = async(req:Request,res:Response)=>{
//     try{
//        const newUser =  await createUser(req.body)       
//        res.status(201).json({user: newUser,msg:'User created successfully'});       
//     }catch(err: any){
//         res.status(400).json({msg:err.message});       
//     }
// }

// // Function for fetching all users from the database
// export const getUsers = async(req:Request,res:Response)=>{
//     try{
//        const users = await GetUser();
//        res.status(200).json({users: users,msg:'Users fetched successfully'});
//     }catch(err:any){
//         res.status(500).json({msg:err.message});       
//     }
// }