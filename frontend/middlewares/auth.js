import { User } from "../models/Patient.js";
import jwt from "jsonwebtoken"
import { Staff } from "../models/satff.js";
import { Doctor } from "../models/doctor.js";

export const isAuthenticated = async(req,res,next) =>{
    
    const {token} = req.cookies;
    console.log(req.headers.cookies);
    if(!token) return res.status(401).json({
        success: false,
        message: "Login first",
    });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    

    if(!req.user){
        return res.status(401).json({
            success: false,
            message: "Login first",
        }); 
    }


    next();

} 

export const isAuthenticatedReception = async(req,res,next) =>{
    
    const {token} = req.cookies;
    console.log(req.headers.cookies);
    if(!token) return res.status(401).json({
        success: false,
        message: "Login first",
    });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Staff.findById(decoded._id);
    
    if(!req.user){
        return res.status(401).json({
            success: false,
            message: "Login first",
        }); 
    }

    next();

}



export const isAuthenticatedDoctor = async(req,res,next) =>{
    
    const {token} = req.cookies;
    console.log(req.headers.cookies);
    if(!token) return res.status(401).json({
        success: false,
        message: "Login first",
    });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Doctor.findById(decoded._id);
    
    if(!req.user){
        return res.status(401).json({
            success: false,
            message: "Login first",
        }); 
    }

    next();

}

