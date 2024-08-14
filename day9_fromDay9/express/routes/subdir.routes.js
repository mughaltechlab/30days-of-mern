const express = require("express");
const router = express.Router();
const {getIndexPage, getTestPage} = require('../controllers/subdir.controllers.js');

router.get('^/$|/index(.html)?', getIndexPage);

router.get('/test(.html)?', getTestPage);

module.exports = router;