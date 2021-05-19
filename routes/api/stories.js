const express = require('express');
const router = express.Router();
const storiesCtrl = require('../../controllers/api/stories');

router.get('/:id', storiesCtrl.index);

module.exports = router;