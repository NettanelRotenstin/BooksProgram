//import exress
const express = require("express");

const app = express()

app.use(express.json())

app.use('/',()=>{})

app.listen(1212, () => {
    console.log(`server is running on port 1212`)
})