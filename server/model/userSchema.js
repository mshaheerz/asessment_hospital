import mongoose from "mongoose";

const userShcema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

const userModel=mongoose.model('user',userShcema);
export default userModel;