
import express ,{Express} from 'express'
import { createNewUser, getUsers } from '../controllers/userController';
import verifyUser from '../middlewares/verifyUser';
import { getList } from '../controllers/candideteController';
const routerCandidate = express.Router();

console.log("dfdf")
routerCandidate.get("/", verifyUser, getList);


export default routerCandidate