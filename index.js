const express =  require("express");
require("dotenv").config();
//importing db connection
const db = require("./config/database");
//importing cloudinary connection
const cloudinary = require("./config/clodinary");

const app = express();
const PORT = process.env.PORT || 2000;

//adding middlewares
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload());

//db connect
db.dbconnect();

//cloudinary connection call
cloudinary.connectCloudinary();

//route mounting 
const upload = require('./routes/FileUpload');
app.use("/api/v1/upload",upload);

//activate server
app.listen(4000,()=>{
    console.log(`Server Started successfully at port No. ${PORT}`);
})