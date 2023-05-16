const cloudinary = require("cloudinary").v2;

require("dotenv").config();

exports.connectCloudinary = () =>{
    try{
        cloudinary.config({
            // cloud_name: process.env.CLOUD_NAME,
            // api_key: process.env.API_KEY,
            // api_secret: process.env.CLOUD_NAME,
            cloud_name: "ddifix5wn",
            api_key: "664297994544247",
            api_secret: "kMUVjAWALQxge06Up4L6eKm7uW4",
        })

    }
    catch(error){
        console.log(err);
    }
}
