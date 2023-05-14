import { Schema, model } from "mongoose"
import { IUser } from "./user.interface"

// * Step 2: Create a Schema using interface
    const userSchema = new Schema < IUser > ({
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


    // * Step 3: Create a Model using interface and Schema
    const User = model<IUser>("User", userSchema)