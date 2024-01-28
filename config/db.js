const mongoose = require('mongoose');

const dotenv = require('dotenv');
const {Mongoose} = require("mongoose");

dotenv.config();
const db = async () => {
    try {
        const connection = await mongoose;
      await connection.connect(process.env.MONGO_URL,{
          retryWrites: true,
          w: "majority"
      })
        const _mongoose = this instanceof Mongoose ? this : mongoose;
      const conn = _mongoose.connection;
        console.log(`MongoDB Connected:${conn.host}`)
      return conn.openUri('mongodb+srv://shurganovalex:yxvQb4xsVIcAMX7r@alexmercer.nhguebu.mongodb.net/Alex/Alex')
          .then(()=> _mongoose)
    } catch (error){
console.error(error)
    }
}

module.exports = db;