const Aeon = require('../models/Aeon.js');

module.exports = {
    createAeon,
    getAeons,
    updateAeon,
    deleteAeon
}

// Creates a single Aeon 
async function createAeon(req, res) {
    try {
        const aeon = await Aeon.create(req.body);

        res.status(200).json(aeon);
    } catch (err) {
        res.status(400).json(err);
    }
}

// Gets all Aeons
async function getAeons(req, res) {
    try {
        const aeons = await Aeon.find({})

        res.status(200).json(aeons)
    } catch (err) {
        res.status(400).send(err)
    }
}

// Update a single character by ID
async function updateAeon(req, res) {
    try {
        const updatedAeon = await Aeon.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedAeon);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Delte a single character by ID
async function deleteAeon(req, res) {
    try {
        await Aeon.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Successfully Deleted the Aeon',
        });
    } catch (err) {
        res.status(400).send(err);
    }
}