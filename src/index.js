//imports
import express from "express";
import cors from "cors"
import mongoose from "mongoose"
import http from "http"
import router from "./routes/index.js";


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
const mongoUrl = 'mongodb+srv://walobwadan:be3phiqXw2CQ1wwr@cluster0.t40xauj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)
.then(()=>{console.log('MongoDB connected')})
.catch((err)=>{console.log(err)})


app.use('/', router)

