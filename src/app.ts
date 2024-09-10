import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/students/student.route'

const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// * Application Routes
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send()
})

export default app
