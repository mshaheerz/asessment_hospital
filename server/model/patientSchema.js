import mongoose from "mongoose";

const patientSchema=new mongoose.Schema({
    
    patientName:{
        type:String,
        
    },
    orderNo:{
        type:String,
        
    },
    startDate:{
        type:Date,
       
    },
    endDate:{
        type:Date,
       
    },
    doctor:{
        type:String,
        
    },
    hospitalId:{
        type:String,
        
    },
    status:{
        type:String,
        
    },
    testName:{
        type:String,
      
    }
   
},{
    timestamps:true,
})
const patientModel=mongoose.model('patient',patientSchema);
export default patientModel;