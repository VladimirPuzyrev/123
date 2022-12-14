const { Schema, model, ObjectId } = require("mongoose");

const News = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    user: [{type: ObjectId, ref:'User'}]
})

module.exports = model('News', News)