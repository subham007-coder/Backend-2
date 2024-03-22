import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null;
        // upload the cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        // file was successfully uploaded
        console.log("file successfully uploaded on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove temporary file from filesystem
        return null;
    }
}

export {uploadOnCloudinary}