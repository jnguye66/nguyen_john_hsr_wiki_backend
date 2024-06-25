const { Router } = require('express');
const charsCtrl = require('../controllers/char.js');

const router = Router();

// POST Request
router.post('/', charsCtrl.createChar);

// GET Request
router.get('/', charsCtrl.getChars);

// getByID request
router.get('/:id', charsCtrl.getCharById);

// PATCH Request
router.patch('/:id', charsCtrl.updateChar);

// DELETE Request
router.delete('/:id', charsCtrl.deleteChar);

module.exports = router;