var express = require('express');
var router = express.Router();

const signup_route = require('../app/controllers/new_employee')
router.use('/auth',signup_route);

module.exports = router;
