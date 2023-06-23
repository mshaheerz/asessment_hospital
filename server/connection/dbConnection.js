import mongoose from "mongoose";



export async function connectDb(data){
    try{
        await mongoose.connect(data,{dbName:'hospital'});
        console.log('database connected successfully')

    }catch(error){
        console.log(error.message)
    }

}