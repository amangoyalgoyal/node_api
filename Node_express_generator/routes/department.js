var express = require('express');
var router = express.Router();
const departmentController = require('../controllers/departmentController');

/*
*Api for get a particular record from database
*/
router.post('/',function(req, res){
  departmentController.addDepartment(req,res);
});
  
module.exports = router;