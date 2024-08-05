import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET 
    });

 const uploadoncloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath)return null;
        // upload the file on cloudinary
        const file = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        // file has been uploaded on cloudinary
        console.log("file is uploaded on cloudinary",file.url);
        return file;

    }catch(error){
          fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation failed 
          return null;
    }

 }   
 export {uploadoncloudinary};
