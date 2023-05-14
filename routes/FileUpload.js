const express = require("express");
const route = express.Router();
// imageUpload, videoUpload, imageReducerUpload,
const { localFileUpload} = require("../controller/fileUpload");


// route.post("/imageUpload",imageUpload);
// route.post("videoUpload",videoUpload);
// route.post("imageReducerUpload",imageReducerUpload);
route.post("/localFileUpload",localFileUpload);


module.exports  = route;

