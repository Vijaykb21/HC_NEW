import express from "express" ;
import { getall } from "../controllers/patient.js";
import { register } from "../controllers/patient.js";
import { login } from "../controllers/patient.js";
import { getProfile } from "../controllers/patient.js";
import { isAuthenticated, isAuthenticatedDoctor, isAuthenticatedReception } from "../middlewares/auth.js";
import { logout } from "../controllers/patient.js";
import { otpsend, otpverify } from "../controllers/otp.js";
import { staffRegister, stafflogin } from "../controllers/staff.js";
import { createAppointments, getAppointmentsdoctor } from "../controllers/appointments.js";
import { doclogin, doctorreg } from "../controllers/doctor.js";


const router = express.Router();

router.get("/all", getall);
router.post("/register", register);
router.post("/login", login);

router.get("/logout", logout);


router.post("/emailverify",otpsend);
router.post("/otpverify",otpverify);


router.post("/doctorregister" , doctorreg);
router.post("/doctorlogin" , doclogin);

router.post("/stafflogin" , stafflogin);
router.post("/staffregister" , staffRegister);
//uses of parameters

//these are for authentification
router.get("/patientHome",isAuthenticated,getProfile);
router.get("/receptionHome",isAuthenticatedReception,getProfile);
router.get("/doctorHome",isAuthenticatedDoctor,getProfile);



///
router.post("/createAppointments",createAppointments);
router.get("/getAppointmentsdoctor",getAppointmentsdoctor);
// router.post("/getAppointmentsdoctor",getAppointmentsdoctor);


export default router;