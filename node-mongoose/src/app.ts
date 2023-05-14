import express, { Application, NextFunction, Request, Response, } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express()
// Using cors
app.use(cors())
//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//if next is needed,
//We user declare express type (Request, Response, NextFunction, Application, etc...)
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // Inserting a test data into the mongoDB
    /**
     * ? Step 1: interface
     * ? Step 2: Schema
     * ? Step 3: Model
     * ? Step 4: Database query
     */

    // * Step 1: Create an interface
    interface IUser {
        id: string;
        role: string;
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    // * Step 2: Create a Schema using interface
    const schema = new Schema < IUser > ({
        id: {
            type: String,
            required: true, 
            unique: true
        },
        role: { type: String, required: true },
        password: { type: String, required: true },
        name: {
            firstName: { type: String, required: true },
            middleName: { type: String },
            lastName: { type: String, required: true }
        },
        dateOfBirth: { type: Date },
        gender: { type: String, enum: ["male", "female"] },
        email: { type: String, required: true },
        contactNo: { type: String, required: true },
        emergencyContactNo: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true }
    })
//   res.send('Hello World!')
})

export default app