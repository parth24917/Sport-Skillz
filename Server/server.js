const connect = require('../Server/connectdb')
require('dotenv').config();
const mongoose =require('mongoose');
const express = require('express');
const router = require('express').Router();
const loginrouter = require('../Server/routes/auth')
const registerrouter = require('../Server/routes/users')
 const app = express();
 const cors = require('cors');
 app.use(express.json());
 app.use(cors());
 app.use('/login',loginrouter);
 app.use('/register',registerrouter);
 const port = process.env.PORT||5000;
 try{
   connect();
   app.listen(port,()=> {
      console.log(`Listening on port ${port}`)
   })
 }
 catch(err){
   console.log(err);
 }
 