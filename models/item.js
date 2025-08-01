const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: Image, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item