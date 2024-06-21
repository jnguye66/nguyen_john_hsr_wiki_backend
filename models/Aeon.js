const { Schema, model } = require('../config/db-connection');

// Aeon Model for each data entry
const aeonSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    path: {
        type: String,
        required: true,
        unique: true,
    },
    quote: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = model('Aeon', aeonSchema);