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

const DataTypes = sequelize.DataTypes;

//get the instance of model to perform operations on it
var customers  = require('../model/customers')(sequelize, DataTypes);

/*
*@defination : function user to fetch all records from table
*/
exports.getUsers = function(req,res) {
  customers.findAll(
    { 
      attributes : ['zip_code', 'address', 'city', 'state', 'customer_name']
    }).then(customer => {     
    res.send(JSON.stringify({statusCode:200, data:customer,messsage:"Record has been fetched",status: true }));
  }).catch(err => {
    res.send(JSON.stringify({ statusCode:400,messsage:err,status: false }));
  });
}

