import express from 'express'
import 'dotenv/config'
import routerUser from './routes/userRouter'
import routerCandidate from './routes/candidateRouter'
import { connectToMongo } from './config/DB'

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
connectToMongo()


app.use('/api/users',routerUser)
app.use('/api/candidates',routerCandidate)

app.listen(PORT,() => console.log(`listening on port http://localhost:${PORT}`))