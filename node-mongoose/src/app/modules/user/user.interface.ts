import { HydratedDocument, Model } from "mongoose";

// * Step 1: Create an interface
export interface IUser {
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




// Instance methods
export interface IUserMethods {
    fullName(): string;
}

//Statics
export interface UserModel extends Model<IUser, {}, IUserMethods>{
    getAdminUsers():Promise<HydratedDocument<IUser, IUserMethods>>
}
