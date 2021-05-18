const express = require('express');
const router = express.Router();
const kidsCtrl = require('../../controllers/api/kids');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, kidsCtrl.create);

module.exports = router;