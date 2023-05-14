const mongoose = require("mongoose");

exports.dbconnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(() => console.log("DB Connecetion is successful"))
    .catch((err) => { 
        console.log("DB connection failed");
        console.error(err);
        process.exit(1);
    });
}
