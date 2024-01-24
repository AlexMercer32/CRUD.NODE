const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
//route files
const workers = require('./routes/workers');
//connect to DB
const db = connectDB;
//load env vars
dotenv.config({path:'./config/config.env'});

const app = express();

//mount routers
app.use('/api/workers',workers);
const PORT = process.env.PORT || 3000;

const server = app.listen(
    PORT,
    console.log(`Server start on port ${process.env.NODE_ENV} mode on port ${PORT}`)
);
