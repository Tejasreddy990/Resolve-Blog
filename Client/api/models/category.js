const mongoose = require("mongoose")

const categoryschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
},
{ timestamps:true}
);

module.exports = mongoose.model("category", categoryschema)

