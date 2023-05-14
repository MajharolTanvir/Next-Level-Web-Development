// * Step 4: Make an instance and query on database

import { IUser } from "./user.interface";
import User from "./user.model";

// we need an async function. because we use async on the server.ts file.
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload)
    await user.save();
    return user;
}

export const getUsersFromDB = async () => {
    const users = await User.find()
    return users
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => { 
    const user = await User.findOne({ id: payload }, {name: 1, contactNo: 1})
    return user
}