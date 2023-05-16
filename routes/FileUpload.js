const express = require("express");
const route = express.Router();
const { localFileUpload, imageUpload, videoUpload, imageReducerUpload} = require("../controller/fileUpload");


route.post("/localFileUpload",localFileUpload);
route.post("/imageUpload",imageUpload);
route.post("/videoUpload",videoUpload);
route.post("/imageReducerUpload",imageReducerUpload);


module.exports  = route;

