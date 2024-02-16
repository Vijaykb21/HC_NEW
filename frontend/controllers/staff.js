import bcrypt from "bcrypt";
import { send_cookies } from "../utils/features.js";

// import nodemailer
import {Staff } from "../models/satff.js";


export const staffRegister = async (req, res) => {
    const { firstname, email, password } = req.body; // distructering values from an object
    let staff = await Staff.findOne({ email });
  
  
    if (staff){ 
        
        return res.status(404).json({
        success: false,
        message: "staff Already Exist",
      });
    
    }
     
  
    const hashedpassword = await bcrypt.hash(password, 10);
  
    staff = await Staff.create({
      firstname,
      email,
      password: hashedpassword,
    });
  
    send_cookies(staff, res, "Registered Succesfully", 201);
  };



export const stafflogin = async (req, res) => {
  const { email, password } = req.body;
  const staff = await Staff.findOne({ email });

  if (!staff)
    return res.status(404).json({
      success: false,
      message: "You are not the valid staff",
    });

  const isMatch = await bcrypt.compare(password, staff.password);

  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "Invalid Password",
    });

  send_cookies(staff, res, `Welcome back ${staff.firstname}`, 200);
};
