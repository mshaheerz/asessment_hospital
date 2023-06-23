import express  from "express";
import { userLogin,getuserData,getPatients,getFilterData } from "../controller/userController.js";
import { userAuthentcation } from "../middleware/auth.js";
const router=express.Router()


router.post('/login',userLogin);
router.get('/getdata',userAuthentcation,getuserData);
// router.post('/add',patientAdd);
router.get('/patients',getPatients)
router.get('/filter',getFilterData)



export default router;