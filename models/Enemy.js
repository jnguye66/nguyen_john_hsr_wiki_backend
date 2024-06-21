const { Schema, model } = require('../config/db-connection');

const enemySchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    affiliation: {
        type: String,
        required: true
    },

    weakness: {
        type: [String],
        required: true
    },

    desc: {
        type: String,
        required: true
    }
});

// Index to sort by affiliation in asc order
enemySchema.index({ affiliation: 1, type: 1});

// Create the model that will control this collection
module.exports = model("Enemy", enemySchema);