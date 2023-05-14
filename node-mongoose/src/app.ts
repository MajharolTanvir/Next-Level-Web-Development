import express, { Application, NextFunction, Request, Response, } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

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
     * ! Breakdown the all steps as individual file.
     * ? Step 1: interface -> user.interface.ts
     * ? Step 2: Schema -> user.model.ts
     * ? Step 3: Model -> user.model.ts
     * ? Step 4: Database query -> service
     * 
     * * Route -> 
     * * route functions -> controller.ts
     */


    

    // * Step 4: Make an instance and query on database

// we need an async function. because we use async on the server.ts file.
const createUserToDB = async () => {
    const user = new User({
        id: "744",
        role: "Student",
        password: "password",
        name: {
            firstName: "Majharul",
            middleName: "islam",
            lastName: "Khan",
        },
        gender: "male",
        email: "abs@gmail.com",
        contactNo: "023233423423",
        emergencyContactNo: "123123123123",
        presentAddress: "America",
        permanentAddress: "London"
    })
    await user.save();
    console.log(user)
    }
    createUserToDB()

//   res.send('Hello World!')
})

export default app