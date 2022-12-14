const { Schema, model, ObjectId } = require("mongoose");

const Appeal = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Timestamp, required: true},
    status: {type: String},
    type: {type: String, required: true},
    user: [{type: ObjectId, ref:'User'}]
})

module.exports = model('Appeal', Appeal)