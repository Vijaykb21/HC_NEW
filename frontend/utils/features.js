import jwt from "jsonwebtoken"

export const send_cookies = (user,res, message,statusCode=200) =>{
 
const token =  jwt.sign({_id: user._id },process.env.JWT_SECRET,{expiresIn:"1d"}) ;

res.status(statusCode).cookie("token",token,{
    httpOnly: true,
    maxAge: 15*60*1000,
   
}).json({
    success:true,
    message,
});
}
