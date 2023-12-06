import express from "express"
import {db} from './db.js';
import router from "./routes/postsRoute.js"
import userRoutes from "./routes/usersRoute.js"
import authRoutes from "./routes/authRoute.js"
import cors from "cors"
import cookieParser from "cookie-parser";

var form = null;
const app = express()
 
app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", router)

app.get("/test", (req,res)=>{
    res.json("it works")

})

app.listen(2000, ()=>{
    console.log("Connected!")
})