
import { Request, Response } from "express";
import { createcandidate, getCandidateList, initDatabase } from "../service/candidateService";

export const getList = async (req: Request, res: Response) => {
    try {        
        //await initDatabase()
      const list = await getCandidateList();
      res.json(list);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  };
// // Function for creating a new user in the database
export const createNewCandidate = async(req:Request,res:Response)=>{
    try{
       const newCandidate =  await createcandidate(req.body)       
       res.status(201).json({candidate: newCandidate,msg:'newCandidate created successfully'});       
    }catch(err: any){
        res.status(400).json({msg:err.message});       
    }
}

// // Function for fetching all users from the database
// export const getUsers = async(req:Request,res:Response)=>{
//     try{
//        const users = await GetUser();
//        res.status(200).json({users: users,msg:'Users fetched successfully'});
//     }catch(err:any){
//         res.status(500).json({msg:err.message});       
//     }
// }