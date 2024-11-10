// import { Request, Response } from "express";

// // Function for creating a new user in the database
// export const createNewTodo = async(req:Request,res:Response):Promise<void>=>{
//     try{
//        const newTodo:Itodo =  await createTodo(req.body)       
//        res.status(201).json({todo: newTodo,msg:'User created successfully'});       
//     }catch(err:any){
//         res.status(400).json({msg:err.message});       
//     }
// }
// export const getTodos = async(req:Request,res:Response):Promise<void>=>{
//     try{
//        const allTodos:Itodo[] = await getallTodos()
//        res.status(200).json({allTodos,msg:'getting todo successfully'});

//     }catch(err:any){
//        res.status(400).json({msg:err.message});
//     }
// }