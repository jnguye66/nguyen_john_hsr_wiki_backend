const { Schema, model } = require('../config/db-connection');

// Character Model for each data entry
const charSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  path: {
    type: String,
    required: true
  },

  element: {
    type: String,
    required: true
  },

  faction: {
    type: String,
    required: true,
  },

  intro: {
    type: String,
    required: true,
    unique: true,
  },

  story: {
    stories: [
      {
        section: String,
        excerpt: String,
      },
    ]
  },

  traces: {
    skills:
      [
        {
          title: String,
          name: String,
          targetting: String,
          desc: String,
          toughness: Number,
        }
      ],
    awakenings:
      [
        {
          stage: Number,
          name: String,
          desc: String,
        }
      ],
    stats:
      [
        {
          stat: String,
          amt: Number
        }
      ],
    // required: true,
  },

  splash: {
    type: String,
    required: true,
    unique: true
  }

});

// Index to sort by name in asc order
charSchema.index({ name: 1, type: 1 });

module.exports = model('Char', charSchema);