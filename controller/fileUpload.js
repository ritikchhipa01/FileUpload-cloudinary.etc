const model = require("../model/File");


exports.localFileUpload = async (req,res) =>{
   try{
    const file = req.files.file;
    console.log("File is here", file);
    let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
    console.log(path);
    console.log("Path ->",path);
    file.mv(path, (err) =>{
       console.log(err);
    });
    
    res.json({ 
        success: true,
        message: "File uploaded Successfully",
    });
   }
   catch(err){
    console.log(err);
   }

}