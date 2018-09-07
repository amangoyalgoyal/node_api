var express = require('express');
//var router = express.Router();
const userController = require('../controllers/userController_v2');
var userRouter = require('./users');
var router = express.Router({mergeParams: true});
  
//this.super_ = userRouter;

/*
* function used for fetch all hte records of user table
*/
router.get('/', function (req, res) {
  userController.getUsers(req,res);
});

//router.use('/',userRouter);

module.exports = router;
