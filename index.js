import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: "Server is working"
//   });
// });

// Middle Ware
app.use(express.json());
app.use(cookieParser())
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 3003;
const URI = process.env.MONGODB_URI;
try {
    mongoose.connect(URI)
    console.log("mongodb connected")
}
catch(e){
    console.log(e);
}

//health
app.get("/health",(req,res)=>{
    res.status(200).json({
        "message":"backend s up and running"
    })
})


//Routes
app.use('/api/user/',userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})