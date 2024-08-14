const express = require("express");
const router = express.Router();
const {getIndex, getTestPage} = require('../controllers/subdir.controllers.js');

router.get('^/$|/index(.html)?', getIndex);

router.get('/test(.html)?', getTestPage);

module.exports = router;