// * Step 4: Make an instance and query on database

import User from "./user.model";

// we need an async function. because we use async on the server.ts file.
export const createUserToDB = async () => {
    const user = await new User({
        id: "7245354",
        role: "Student",
        password: "password",
        name: {
            firstName: "Mr.",
            middleName: "x",
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
    return user;
}
