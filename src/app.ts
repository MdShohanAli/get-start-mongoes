

import express, { Application, Request, Response, NextFunction } from "express"


const app: Application = express()
import cors from 'cors';
import { Schema, Model } from "mongoose";





// use cors 
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// express data
app.get('/', (req: Request, res: Response, next: NextFunction) => {

    // inserting a  test data into mongodb 
    /*
     step 1 : Interface 
     step 2 : Schema 
     step 3 : Model
     Step 4 : Database Query 

    */

    res.send('Hello World!');
    next()

    // creating a interface 

    interface IUser {
        id: string;
        role: string;
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contractNo: string;
        emergencyContractNo: string;
        permanentAddress: string;
    }
    // create  Schema  using for interface 

    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true

        },
        role: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        name: {
            firstName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String,

            },
            lastName: {
                type: String,
                required: true,
            },
            dateOfBirth: {
                type: String,

            },
            gender: {
                type: String,
                enum: ["male", "female"],
                required: true,
            },
            email: {
                type: String,
            },
            contractNo: {
                type: String,
                required: true,
            },
            emergencyContractNo: {
                type: String,
                required: true,
            },
            permanentAddress: {
                type: String,
                required: true,
            }


        },


    })



})



export default app

