var express = require('express');
var router = express.Router();
const submit_route = require('../app/controllers/work_submit')
router.use('/works', submit_route);
const signup_route = require('../app/controllers/employee')
 router.use('/auth',signup_route);

 module.exports = router;
