const cloudinary = require("cloudinary").v2;

require("dotenv").config();

exports.connectCloudinary = () =>{
    try{
        cloudinary.config({
            cloudname: process.env.Cloud_Name,
            apiKey: process.env.Api_Key,
            api_secret: process.env.Api_Secret
        })

    }
    catch(error){
        console.log(err);
    }
}
