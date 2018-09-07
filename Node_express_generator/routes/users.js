var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/*
*Api for get a particular record from database
*/
router.get('/:customer_id',function(req, res){
  userController.getSingleUser(req,res);
});
  


/*
* function used for fetch all hte records of user table
*/
router.get('/', function (req, res) {
  userController.getUsers(req,res);
});

/*
* function used for update record in database
*/
router.put('/:customer_id', function (req, res) {
  userController.updateUser(req,res);
});

/*
* function used for add records in database
*/
router.post('/', function (req, res) {
  userController.addUser(req,res);
});

/*
* function used for delete record from database
*/
router.delete('/:customer_id', function (req, res) {
  userController.deleteUser(req,res);
});


module.exports = router;
