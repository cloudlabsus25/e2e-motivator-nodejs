const express = require('express');
const { getMotivators, addMotivator } = require('../controllers/motivatorController');

const router = express.Router();
router.get('/', getMotivators);
router.post('/', addMotivator);

module.exports = router;
