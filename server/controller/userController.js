import userModel from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import patientModel from "../model/patientSchema.js";

export const secretkey = "secretbyhospital";

export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (email && password) {
      let user = await userModel.findOne({ email: email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const userId = user._id;
          const token = jwt.sign({ userId }, secretkey, { expiresIn: "2h" });
          res.json({
            status: "success",
            message: "Login compleated",
            user,
            token,
          });
        } else {
          res.json({ status: "failed", message: "Incorrect password !!" });
        }
      } else {
        res.json({
          status: "failed",
          message: "your email id or password entered is wrong!",
        });
      }
    } else {
      res.json({ status: "failed", message: "All fields are required!!" });
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function getuserData(req, res, next) {
  try {
    const userId = req.userId;
    const userData = await userModel.findById(userId);
    res.json({status:'success',userData});
  } catch (error) {
    console.log(error.message);
  }
}

// export async function patientAdd(req,res){
//     try{
//        let obj=req.body;
//        console.log(obj,'-----')
//       let patient= await patientModel.create({
//         patientName:obj.patientName,
//         orderNo:obj.bill,
//         startDate:obj.fromDate,
//         endDate:obj.toDate,
//         doctor:obj.doctor,
//         hospitalId:obj.hostpitalID,
//         status:obj.status,
//         testName:obj.testName,
//        })

//        console.log(patient)

//     }catch(error){
//         console.log(error.message)
//     }
// }

export async function getPatients(req, res) {
  try {
    const { limit, page } = req.query;
    let pages = page - 1;
    const patient = await patientModel
      .find()
      .skip(pages * limit)
      .limit(limit)
      .sort({ updatedAt: -1 });
    res.json(patient);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getFilterData(req, res) {
  try {
    let filter = {};
    let {
      startDate,
      endDate,
      doctor,
      patientName,
      hospitalId,
      status,
      orderNo,
      testName,
    } = req.query;
    if (startDate !== "") {
      filter.startDate = startDate;
    }

    if (endDate !== "") {
      filter.endDate = endDate;
    }
    if (doctor !== "") {
      filter.doctor = doctor;
    }
    if (patientName !== "") {
      filter.patientName = patientName;
    }
    if (hospitalId !== "") {
      filter.hospitalId = hospitalId;
    }
    if (status !== "") {
      filter.status = status;
    }
    if (orderNo !== "") {
      filter.orderNo = orderNo;
    }
    if (testName !== "") {
      filter.testName = testName;
    }

    const data = await patientModel.find(filter);

    res.json(data);
  } catch (error) {
    console.log(error.message);
  }
}
