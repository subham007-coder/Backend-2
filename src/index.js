// require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
  path: './env'
})


// db connect 2st options and best practice


connectDB()








// db connect 1st options
/*( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log(err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app listening on port, ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw err;
  }
})();
*/