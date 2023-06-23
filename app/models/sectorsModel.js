const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    sectorName: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    categories: [this],
});

const sectorSchema = new mongoose.Schema({
    sectorName: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    categories: [categorySchema],
});

module.exports = mongoose.model('Sector', sectorSchema);
