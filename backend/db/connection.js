const mongoose = require("mongoose");
require('dotenv').config()
mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Connected with mongodb Successfully ✅✅✅...")
}).catch((error)=>{
    console.log("Connection failed ❌❌❌.... "+error)
})
