import express from "express" ;
import { getall } from "../controllers/patient.js";
import { register } from "../controllers/patient.js";
import { login } from "../controllers/patient.js";
import { getProfile } from "../controllers/patient.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { logout } from "../controllers/patient.js";


const router = express.Router();

router.get("/all", getall);
router.post("/register", register);
router.post("/login", login);
router.get("/patientHome",isAuthenticated,getProfile);
router.get("/logout", logout);
//uses of parameters

export default router;