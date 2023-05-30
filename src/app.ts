

import express, { Application, Request, Response, NextFunction } from "express"


const app: Application = express()
import cors from 'cors';



// use cors 
app.use(cors())
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!');
    next()
})

export default app

