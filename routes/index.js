var express = require('express');
var router = express.Router();

const signup_route = require('../app/controllers/employee')
router.use('/auth',signup_route);

module.exports = router;
