import jwt from 'jsonwebtoken';
import { secretkey } from '../controller/userController.js';


export function userAuthentcation(req,res,next){
    try{
        let token=req.headers['usertoken'];
        if(token){
            jwt.verify(token,secretkey,(err,decoded)=>{
                if(err){
                    res.json({status:'failed','message':'user not authenticated'})
                }else{
                    req.userId=decoded.userId;
                    next()
                }
            })
        }else{
            res.json({'status':'failed','message':"usernot finded"})
        }

    }catch(error){
        console.log(error.message)
    }
}