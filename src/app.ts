import express from 'express'
import 'dotenv/config'
import routerUser from './routes/userRouter'
import routerCandidate from './routes/candidateRouter'
import { connectToMongo } from './config/DB'
import cors from 'cors'
import routerVote from './routes/votesRouter'
import http from 'http'
import { Server } from 'socket.io'

const PORT = process.env.PORT || 3000
const app = express()
export const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: '*'
       },
});

io.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`);
    
    // מאזין לאירוע 'newvote' שמגיע מלקוח כלשהו
    socket.on('newvote', () => {
        console.log("Received 'newvote' event");
        
        // שידור האירוע 'newvote' לכל הלקוחות המחוברים
        io.emit('newvote');
    });

    socket.on('disconnect', () => {
        console.log(`user disconnected ${socket.id}`);
    });
});

app.use(express.json())
app.use(cors())
connectToMongo()


app.use('/api/users', routerUser)
app.use('/api/candidates', routerCandidate)
app.use('/api/vote', routerVote)

server.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`))