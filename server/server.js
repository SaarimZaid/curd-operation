// // libraries consts
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// // file consts
// const connect = require("./database/mongoDb.js");

// // router consts
// const userRouter = require("./routes/userRoutes.js");

// // app
// const app = express();
// const port = 5000;

// app.use(bodyParser.json());
// app.use(cors());
// app.use("/auth", userRouter);

// connect(); //you will have to edit this in ./databse/mongoDb.js

// app.listen(port, () => console.log(`server started on port ${port}`));


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/curdoperations';
const UserSchema = require('./models/userModel');

mongoose.connect(mongoUri)
.then(()=>{
    console.log('mongoDB connected successfully')
})
.catch((er)=>{
    console.log(`unable to connect with mongodb ${er}`)
})

UserSchema({
    name:'Zaid',
    email:'zaid@gmail.com',
    mobile:'932452345'
})
.save()
.then((data)=>{
    console.log(`saved successfully ${data}`)
})
.catch((er)=>{
    console.error(er.message)
})

app.listen(5000, ()=>{
    console.log('server is running on port 5000')
})