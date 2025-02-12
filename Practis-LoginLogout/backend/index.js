const express=require("express");
const app= express();
require("dotenv").config()
const cors=require("cors")

const UserRoute= require("./Routes/userRoute")

const port=process.env.PORT
const dbcon=process.env.DBCON

const bodyParser=require("body-parser")
const mongoose=require("mongoose")

mongoose.connect(dbcon).then(()=>{
    console.log("DB Connect");
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/user", UserRoute)

app.listen(port,()=>{
    console.log(`server Run on ${port}`)
})