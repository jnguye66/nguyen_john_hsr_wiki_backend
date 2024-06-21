const { Router } = require('express');
const aeonCtrl = require('../controllers/aeon.js');

const router = Router();

// POST Request
router.post('/', aeonCtrl.createAeon);

// GET Request
router.get('/', aeonCtrl.getAeons);

// PATCH Request
router.patch('/:id', aeonCtrl.updateAeon);

// DELETE Request
router.delete('/:id', aeonCtrl.deleteAeon);

module.exports = router;