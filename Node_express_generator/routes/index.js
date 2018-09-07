var express = require('express');
var usersRouter = require('./users');
var usersRouterV2 = require('./users_v2');
var router = express.Router();

/* GET home page. */

router.use('/users/v1', usersRouter);
router.use('/users/v2', usersRouterV2);
router.use('/users/v2', usersRouter);

module.exports = router;
