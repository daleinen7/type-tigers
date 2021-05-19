const express = require('express');
const router = express.Router();
const wordsCtrl = require('../../controllers/api/words');

router.get('/', wordsCtrl.seed);

module.exports = router;