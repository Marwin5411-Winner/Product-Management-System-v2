const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: String,
    price: Number,
    type: String,
    amount: Number,
});

module.exports = model('Product', productSchema);


