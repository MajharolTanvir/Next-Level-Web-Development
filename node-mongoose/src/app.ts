import express, { Application} from "express";
import cors from "cors";
const app: Application = express()
// Using cors
app.use(cors())

// Application routes
import userRoute from "./app/modules/user/user.route"  


//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// It can't be use app.get
// app.get('/api/v1/user', userRoute)
app.use('/api/v1/user', userRoute)

export default app