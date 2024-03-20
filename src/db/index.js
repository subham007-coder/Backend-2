import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
       const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB Host: ${connectionInstence.connection.host}`);
    //    console.log(connectionInstence);
    } catch (error) {
        console.log("mongoDB connect error",error);
        process.exit(1)
    }
}

export default connectDB