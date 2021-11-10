const express = require('express');
const router = express.Router();
const movies = require('../controllers/movieController');

router.get('/', movies);

module.exports = router;