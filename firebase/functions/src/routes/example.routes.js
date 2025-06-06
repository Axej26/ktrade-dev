const express = require('express');
const router = express.Router();
const {getSaludo} = require('../controllers/example.controller');

router.get('/hello', getSaludo);

module.exports = router;
