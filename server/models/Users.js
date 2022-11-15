const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
    login: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String},
    files: [{type: ObjectId, ref:'File'}]
})

//6372c61289c31537d8f044c2
module.exports = model('User', User)