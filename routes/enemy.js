const { Router } = require('express');
const enemyCtrl = require('../controllers/enemy.js');

const router = Router();

// POST Request
router.post('/', enemyCtrl.createEnemy);

// GET Request
router.get('/', enemyCtrl.getEnemies);

// PATCH Request
router.patch('/:id', enemyCtrl.updateEnemy);

// DELETE Request
router.delete('/:id', enemyCtrl.deleteEnemy);

module.exports = router;