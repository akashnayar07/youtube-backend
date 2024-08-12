import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/index.js';  
import { app } from './app.js';

// Connect to the database
connectDB()
.then(()=> {
    app.listen(process.env.port || 8000, ()=>{
        console.log("Server is running :", process.env.port);
    });
    app.get('/', function (req, res) {
        res.send("hello brother")
      })
})
.catch((error)=> console.log("Mongo DB Connect Failed",error));


// Your Express app or other logic goes here
