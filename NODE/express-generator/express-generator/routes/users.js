var express = require('express');
var router = express.Router();
const user = require('../controller/user');

/* GET users listing. */
router.get('/',user.user);

module.exports = router;
