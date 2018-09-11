var http = require('http');
const Sequelize = require('sequelize');
var express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('../dbORM').getInstance();
//this is required for fetching body parameters
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//add following module for accepting form data
var FormData = require('form-data');
var fs = require('fs');
var form = new FormData();


const DataTypes = sequelize.DataTypes;

//get the instance of model to perform operations on it
var department  = require('../models/department')(sequelize, DataTypes);/*
*@defination : function user to update record in table
*/
exports.addDepartment = function(req,res) {
  console.log(res.body);
  department.create({
    departmentName:        req.body.departmentName,
    hodName:               req.body.hodName,
    email:                 req.body.email,
    companyName:           req.body.companyName,
    companyLocation:       req.body.companyLocation
  }).then(department => {     
  res.send(JSON.stringify({statusCode:200, data:department,messsage:"Record has been Added",status: true }));
  }).catch(err => {
    res.send(JSON.stringify({ statusCode:400,messsage:err,status: false }));
  });
}

