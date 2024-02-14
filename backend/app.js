import express from "express"
import { config } from "dotenv";
import UserRouter from "./routes/user.js";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { isAuthenticated } from "./middlewares/auth.js";

config({
    path: "./data/config.env"
})


//using middlewares  
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000",
}));



//importing Routes
app.use("/api/v1/users", UserRouter);
