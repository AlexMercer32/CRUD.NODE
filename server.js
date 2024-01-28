const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');

//route files
const workers = require('./routes/workers');
//connect to DB

//load env vars
dotenv.config({path:'./config/config.env'});

const app = express();

//mount routers
const PORT = process.env.PORT || 3000;
//connect to db
db().then(r => {

});

app.use('/api/workers',workers);
 app.listen(
    PORT,
    console.log(`Server start on port ${process.env.NODE_ENV} mode on port ${PORT}`)
);
