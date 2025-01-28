import { booksArrey } from "./db/booksArrey";
import crdRouter from "./routes/crdRouter";
import router from "./routes/crdRouter";

//import exress
const express = require("express");

const app = express()

app.use(express.json())

app.use('/', crdRouter)
 
app.listen(1212, () => {
    console.log(`server is running on port 1212`)
})