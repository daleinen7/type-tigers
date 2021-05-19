const express = require('express');
const router = express.Router();
const kidsCtrl = require('../../controllers/api/kids');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, kidsCtrl.index);
router.post('/', ensureLoggedIn, kidsCtrl.create);
router.put('/:id', ensureLoggedIn, kidsCtrl.edit);
router.delete('/:id', ensureLoggedIn, kidsCtrl.deleteOne);

module.exports = router;