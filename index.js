import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
const app = express()

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})