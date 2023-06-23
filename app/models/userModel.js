const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Sector: {
        type: String,
        required: true
    },
    AgreeToTerms: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
