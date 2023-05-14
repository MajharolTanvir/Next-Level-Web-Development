import express, { Application, NextFunction, Request, Response, } from "express";
import cors from "cors";

const app: Application = express()
// Using cors
app.use(cors())


//if next is needed,
//We user declare express type (Request, Response, NextFunction, Application, etc...)
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

export default app