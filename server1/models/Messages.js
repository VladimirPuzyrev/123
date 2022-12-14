const { Schema, model, ObjectId } = require("mongoose");

const Messages = new Schema({
    text: {type: String, required: true},
    file: {type: String},
    chats: [{type: ObjectId, ref:'Chats'}]
})

module.exports = model('Messages', Messages)