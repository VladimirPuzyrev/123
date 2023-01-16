const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
    login: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String},
    role: {type: String, required: true},
    servers: [{type: ObjectId, ref:'Servers'}]
})

module.exports = model('User', User)