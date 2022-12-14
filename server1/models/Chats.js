const { Schema, model, ObjectId } = require("mongoose");

const Chats = new Schema({
    name: {type: String, required: true},
    servers: [{type: ObjectId, ref:'Servers'}],
    user: [{type: ObjectId, ref:'User'}],
    messages: [{type: ObjectId, ref:'Messages'}]
})

module.exports = model('Chats', Chats)