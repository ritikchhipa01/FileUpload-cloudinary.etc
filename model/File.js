const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   imageUrl: {
      type: String,
   },
   tags: {
      type: String,
   },
   email: {
      type: String,
   },
});

//Post Middleware
fileSchema.post("save", async function (DOC) {
   try {
      //transporter
      let transport = nodemailer.createTransport({
         host: process.env.MAIL_HOST,
         auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
         },
      });

      //send Mail
      const info = await transport.sendMail({
         from: "Creative Pvt. Ltd.",
         to: DOC.email,
         subject: `Congratulation ${DOC.name}, Now you are a Creativians-_-`,
         html: `<h2>HELLO ${DOC.name}</h2> <p>Good Evening</p> view Here: <a href="${DOC.imageUrl}">FILE LINK</a>`,
      });
   }
   catch (error) {
      console.log(error);
   }
});

const file = mongoose.model("File", fileSchema);
module.exports = file;
