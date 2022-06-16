const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const url = process.env.ATLAS_URI;
mongoose.connect(url);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb is connected successfully')
})


const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);



const port = process.env.PORT || 5001;
app.listen(port,() => {
    console.log(` The server is running on : ${port}`)
})

