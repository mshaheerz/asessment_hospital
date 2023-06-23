import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './connection/dbConnection.js';
import  cors from 'cors';
import userRouter from './router/userRouter.js'
import morgan from 'morgan'
dotenv.config();
const app=express();



let database_connection=process.env.DATABASE_CONNECTION;
connectDb(database_connection)

app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

app.use('/',userRouter)


app.listen(2000,()=>{
    console.log('server running at the port is 2000')
})