const mongoose = require("mongoose");
const querySchema = new mongoose.Schema({
    username:{
        type:String,
        require: true
    },
    email:{
        type : String,
        require: true
    },
    message:{
        type : String,
        require: true,
    },
    date :{
        type: Date,
        default: new Date
    }
})
const Query = new mongoose.model("Query", querySchema)
module.exports =Query