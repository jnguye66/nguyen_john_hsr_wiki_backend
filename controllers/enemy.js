const Enemy = require('../models/Enemy.js');

module.exports = {
    createEnemy,
    getEnemies,
    updateEnemy,
    deleteEnemy
}

// Creates a single character 
async function createEnemy(req, res) {
    try {
        const enemy = await Enemy.create(req.body);

        res.status(200).json(enemy);
    } catch (err) {
        res.status(400).json(err);
    }
}

// Gets all enemies
async function getEnemies(req, res) {
    try {
        const enemies = await Enemy.find({})

        res.status(200).json(enemies)
    } catch (err) {
        res.status(400).send(err)
    }
}

// Update a single enemy by ID
async function updateEnemy(req, res) {
    try {
        const updatedEnemy = await Enemy.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedEnemy);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Delte a single character by ID
async function deleteEnemy(req, res) {
    try {
        await Enemy.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Successfully Deleted the Enemy',
        });
    } catch (err) {
        res.status(400).send(err);
    }
}