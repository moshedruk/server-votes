
import express ,{Express} from 'express'
import { createNewUser, getUsers } from '../controllers/userController';
import verifyUser from '../middlewares/verifyUser';
import { createNewCandidate, getList } from '../controllers/candideteController';
import verifyAdmin from '../middlewares/verifyAdmin';
const routerCandidate = express.Router();

console.log("dfdf")
routerCandidate.get("/", verifyUser, getList);
routerCandidate.post("/", verifyAdmin, createNewCandidate);


export default routerCandidate