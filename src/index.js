import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

// db connect 2st options and best practice










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