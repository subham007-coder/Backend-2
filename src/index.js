// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
  path: "./env",
});


app.get("/", (req, res) =>{
  res.send("Hello World");
})



// db connect 2st options and best practice
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, (req, res) => {
      console.log(`Server is runing at Port: ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log("MongoDB connection faild :", err);
  });