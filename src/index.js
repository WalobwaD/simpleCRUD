//imports
import express from "express"; //node framework for building APIs
import cors from "cors" //middleware for our application
import mongoose from "mongoose" //ORM-> Allows you interact with MongoDB
import http from "http" //creating server
import dotenv from "dotenv" //enables us to access the .env file

//file imports
import router from "./routes/index.js";  //definition of routes

dotenv.config()

//middlewares
const app = express();
app.use(cors({
    origin: "*"//allow all origins
}))
app.use(express.json())


//server
const server = http.createServer(app)
server.listen(8000, ()=>{
    console.log('Server is running on http://localhost:8000')
})

//mongoconfig
const mongoUrl = process.env.MONGO_URL
mongoose.connect(mongoUrl)
.then(()=>{
        console.log('MongoDB connected')
    })
.catch((err)=>{
    console.log(err)
})


app.use('/', router)

