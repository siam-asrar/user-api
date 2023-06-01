import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/users', usersRouter)

app.get('/', async (req: Request, res: Response) => {
    res.send('Connected to the user API 🛢 service')
})

export default app