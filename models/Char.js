const { Schema, model } = require('../config/db-connection');

// Character Model for each data entry
const charSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
    // Validation Rule
    min: [5, 'Username must be at least 5 characters long.'],
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },

  path: { type: String, required: true },

  element: { type: String, required: true },
});

// Index to sort by name in asc order
charSchema.index({ name: 1, type: 1 });

module.exports = model('Char', charSchema);