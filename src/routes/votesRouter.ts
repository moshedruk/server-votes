
import express, { Express } from 'express'
import verifyUser from '../middlewares/verifyUser';
import { vote } from '../controllers/votesController';
const routerVote = express.Router();

routerVote.post("/", verifyUser, vote);

export default routerVote