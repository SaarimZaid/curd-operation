const mongoose = require('mongoose');
const UserModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
    }
})

const UserSchema = mongoose.model('UserSchema', UserModel)
module.exports = UserSchema