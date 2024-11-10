import express, { Express } from 'express'
import { createNewUser, getUsers, login } from '../controllers/userController';
const routerUser = express.Router();



routerUser.post('/login', login)

routerUser.post('/register', createNewUser)

routerUser.get('/', getUsers)

export default routerUser