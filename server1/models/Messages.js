const { Schema, model, ObjectId } = require("mongoose");

const Messages = new Schema({
    messageType: {type: String, required: true},
    textOrPath: {type: String, required: true},
    sendTime: {type: Date, required: true},
    chats: [{type: ObjectId, ref:'Chats'}],
    user: [{type: ObjectId, ref:'User'}]
})

module.exports = model('Messages', Messages)