const File = require("../model/File");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const express = require("express");

exports.localFileUpload = async (req, res) => {
   try {
      const file = req.files.file;

      let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
      console.log(path);
      file.mv(path, (err) => {
         console.log(err);
      });

      res.json({
         success: true,
         message: "File uploaded Successfully",
      });
   } catch (err) {
      console.log(err);
   }
};

const isFileTypeSupported = async (fileType, supportedTypes) => {
   return supportedTypes.includes(fileType);
};

const uploadFileToCloudinary = async (file, folder,quality) => {
   const options = { folder };
   options.resource_type = "auto";
   if(quality){
      options.quality= quality;
   }
   return await cloudinary.uploader.upload(file.tempFilePath, options);
};

//imageUpload Handler

exports.imageUpload = async (req, res) => {
   try {
      //data fetch from body
      const { name, tags, email } = req.body;

      const file = req.files.imageFile;

      //validation
      const supportedTypes = ["jpg", "jpeg", "png"];
      const fileType = file.name.split(".")[1].toLowerCase();

      if (!isFileTypeSupported(fileType, supportedTypes)) {
         return res.status(400).json({
            success: false,
            message: "Type is not supported",
         });
      }

      //file format supported then we
      const response = await uploadFileToCloudinary(file, "Codehelp");
      

      //save file in db
      const fileData = await File.create({
         name,
         tags,
         email,
         imageUrl: response.secure_url,
      });

      res.json({
         success: true,
         imageUrl: response.secure_url,
         message: "File uploaded successfully",
      });
   } catch (err) {
      console.log(err);
      res.status(400).json({
         success: false,
         message: "Something Went Wrong",
      });
   }
};

//video Upload

exports.videoUpload = async (req, res) => {
   try {
      const { name, tags, email } = req.body;
      console.log(name, tags, email);

      const file = req.files.videoFile;
      
      const supportedTypes = ["mp4", "mov"];
      const fileType = file.name.split(".")[1].toLowerCase();
     
      if (!isFileTypeSupported(fileType, supportedTypes)) {
         return res.status(400).json({
            success: false,
            message: "Type is not supported",
         });
      }

      const response = await uploadFileToCloudinary(file, "Codehelp");

      const fileData = await File.create({
         name,
         tags,
         email,
         imageUrl: response.secure_url,
      });

      res.json({
         success: true,
         videoUrl: response.secure_url,
         message: "File uploaded successfully",
      });
   } catch (error) {
      console.log(error),
         res.status(400).json({
            success: false,
            message: "Something Went Wrong",
         });
   }
};

//image Reducer
exports.imageReducerUpload = async (req, res) => {
   try {
      const {name,tags,email} = req.body;

      const file = req.files.reduceFile;

      const supportedTypes = ["jpg", "jpeg", "png"];
      const fileType = file.name.split(".")[1].toLowerCase();
      
      if (!isFileTypeSupported(fileType, supportedTypes)) {
         return res.status(400).json({
            success: false,
            message: "Type is not supported",
         });
      }

      const response = await uploadFileToCloudinary(file, "Codehelp",30);
      
      const fileData = await File.create({
         name,
         tags,
         email,
         imageUrl: response.secure_url,
      });

      res.json({
         success: true,
         imageUrl: response.secure_url,
         message: "File uploaded successfully",
      });

   } catch (error) {
      console.log(error);
      res.status(400).json({
         success: false,
         message: "something Went Wrong",
      });
   }
};
