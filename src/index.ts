
import { connectDB } from "./db/config";
import crdRouter from "./routes/crdRouter";
import cors from 'cors';
//import exress
import express from 'express';

const app = express()

connectDB()

app.use(cors())

app.use(express.json())

app.use('/',crdRouter);
 
app.listen(1214, () => {
    console.log(`server is running on port 1214`)
})