
import express ,{Express} from 'express'
import { createNewUser, getUsers } from '../controllers/userController';
const routerCandidate = express.Router();



routerCandidate.post('/',createNewUser)

routerCandidate.get('/',getUsers)

export default routerCandidate