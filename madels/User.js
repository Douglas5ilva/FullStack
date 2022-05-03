const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlenhth:50},
    email:{type: String, required: true, minlength:3, maxlenhth:100},
    password: {type: String, required: true, minlength:6, maxlenhth: 200 },
    admin: {type: Boolean, default: false},
    createDat:{type:Date, dafault: Date.now}
})

module.exports = mongoose.model('User', userSchema)