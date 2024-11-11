import { Request, Response } from "express";
import { createUser, getUser, loginUser } from "../service/userService";
import { IloginDto } from "../DTOs/login";



export const login = async (req:Request<IloginDto>, res:Response) => {
    try {
        const user = await loginUser(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json((error as Error).message);
        
    }
}
// Function for creating a new user in the database
export const createNewUser = async(req:Request,res:Response)=>{
    try{
        console.log(req.body)
       const newUser =  await createUser(req.body)  
       // need token use here!     
       res.status(201).json({user: newUser,msg:'User created successfully'});       
    }catch(error){
        res.status(400).json((error as Error).message);       
    }
}

// Function for fetching all users from the database
export const getUsers = async(req:Request,res:Response)=>{
    try{
       const users = await getUser();
       res.status(200).json({users: users,msg:'Users fetched successfully'});
    }catch(error){
        res.status(500).json((error as Error).message);       
    }
}