import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'
import data from '../src/app/modules/users/quiz.json'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.get('/quiz', async (req: Request, res: Response) => {
    res.send(data)
})

app.get('/', async (req: Request, res: Response) => {
    res.send('Connected to the user API 🛢 service')
})

export default app