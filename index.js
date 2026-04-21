import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

const app = express()

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: "Server is working"
//   });
// });

// Middle Ware
app.use(express.json())

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

//Routes
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})