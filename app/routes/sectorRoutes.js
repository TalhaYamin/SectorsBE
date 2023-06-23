const express = require('express');
const router = express.Router();

const sectorController = require('../controllers/sectorController');

router.get('/sectors', sectorController.getSectors);

router.post('/sectors', sectorController.createSector);

module.exports = router;
