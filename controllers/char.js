const Char = require('../models/Char.js');

module.exports = {
  createChar,
  getChars,
  updateChar,
  deleteChar,
};

// Creates a single character 
async function createChar(req, res) {
  try {
    const char = await Char.create(req.body);

    res.status(200).json(char);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Gets all characters
async function getChars(req, res) {
  try {
    const chars = await Char.find({})

    res.status(200).json(chars)
  } catch (err) {
    res.status(400).send(err)
  }
}

// Update a single character by ID
async function updateChar(req, res) {
  try {
    const updatedChar = await Char.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedChar);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Delte a single character by ID
async function deleteChar(req, res) {
  try {
    await Char.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the Character',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}