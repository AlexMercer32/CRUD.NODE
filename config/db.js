const mongoose = require('mongoose');




import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
id: Number,
firstName: String,
   lastName: String,
enum:[
    'high',
    'middle',
    'low'
]
   });