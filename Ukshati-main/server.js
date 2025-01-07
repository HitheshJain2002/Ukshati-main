import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mySqlPool from "./config/Database.js";
import cors from 'cors';
import Authroutes from "./Routes/Authroutes.js";

// npm run server               

//dotenv file configuration
dotenv.config();


// rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))



app.use("/login", Authroutes)



//routes
app.get("/",(req,res) =>{
    res.send("<h1>This is ukshati server</h1>");
});

// port
const PORT = process.env.PORT;


// conditionally listen
mySqlPool.query('SELECT 1').then(() =>{

// mysql connection
console.log('mysql db connected sucessfully')

//listening
app.listen(PORT, () =>{
    console.log(`the server is running in ${PORT}`);
});

}).catch((error) =>{
    console.log(error)
})



