const { Schema, model, ObjectId } = require("mongoose");

const Server = new Schema({
    name: {type: String, required: true},
    link: {type: String, required: true, unique: true},
    role: {type: String},
    avatar: {type: String},
    users: [{type: ObjectId, ref: 'User'}],
    chats: [{type: ObjectId, ref:'Chats'}]
})

module.exports = model('Server', Server)