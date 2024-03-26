const mongoose = require('mongoose');

const users = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        unique : true
    },
    phone : {
        type : Number,
        unique : true,
        require : true
    }
});

module.exports = mongoose.model("users",users);