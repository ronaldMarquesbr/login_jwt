const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/userRouter');

mongoose.connect(process.env.MONGO_CONNECTION_URL, (error)=> {
    if(error){console.log(error)}
});



app.use('/user', userRouter);

app.listen(process.env.PORT, () => {console.log('Server Running')})