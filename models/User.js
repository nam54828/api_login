const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        require: true,
        minlength: 6,
        maxlength: 20,
    },
    email:{
        type: String,
        require: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password:{
        type:String,
        require: true,
        minlength: 6
    },
    admin:{
        type: Boolean,
        default: false
    },
},{timestamps: true}
);

module.exports = mongoose.model("User",userSchema);