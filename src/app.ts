

import express, { Application } from "express"


const app: Application = express()
import cors from 'cors';


// Application Route

import userRoutes from './app/modules/user/user.route'



// use cors 
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// express data


app.use('/api/v1/user', userRoutes)





export default app

// Pattern MVC , Modular 

/*
 Interface -->  interface.ts
 Schema , Model -> model .ts 

 route 
 route function ->  controller.ts


*/



