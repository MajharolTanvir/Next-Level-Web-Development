import { Schema, model } from "mongoose"
import { IUser, IUserMethods, UserModel } from "./user.interface"


// * Step 2: Create a Schema using interface
const userSchema = new Schema < IUser, UserModel, IUserMethods > ({
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

userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({ role: "admin" });
    return admins
});

userSchema.method('getAdminUsers', async function getAdminUsers() {
    return this.name.firstName + " " + this.name.lastName
})


// * Step 3: Create a Model using interface and Schema
const User = model<IUser, UserModel>("User", userSchema)

export default User