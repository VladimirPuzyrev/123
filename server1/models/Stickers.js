const { Schema, model, ObjectId } = require("mongoose");

const Stickers = new Schema({
    name: {type: String, required: true},
    sticker: {type: String, required: true},
    user: [{type: ObjectId, ref:'User'}]
})

module.exports = model('Stickers', Stickers)