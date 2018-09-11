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
var customers  = require('../models/customers')(sequelize, DataTypes);


/*
*@defination : function user to fetch a particular record from table
*/
exports.getSingleUser = function(req,res) {
      customers.findOne(
        { 
          where: {
            customer_id: req.params.customer_id
          }
          ,attributes : ['customer_id', 'zip_code', 'address', 'city', 'state', 'customer_name']
        }).then(customer => {     
        res.send(JSON.stringify({statusCode:200, data:customer,messsage:"Record has been fetched",status: true }));
      }).catch(err => {
        res.send(JSON.stringify({ statusCode:400,messsage:err,status: false }));
      });
}

/*
*@defination : function user to fetch all records from table
*/
exports.getUsers = function(req,res) {
  customers.findAll(
    { 
      attributes : ['customer_id', 'zip_code', 'address', 'city', 'state', 'customer_name']
    }).then(customer => {     
    res.send(JSON.stringify({statusCode:200, data:customer,messsage:"Record has been fetched",status: true }));
  }).catch(err => {
    res.send(JSON.stringify({ statusCode:400,messsage:err,status: false }));
  });
}

/*
*@defination : function user to update record in table
*/
exports.updateUser = function(req,res) {
  customers.update(
    {
      zip_code:        req.body.zip_code,
      address:         req.body.address,
      city:            req.body.city,
      state:           req.body.state, 
      customer_name:   req.body.customer_name
    },{
      where: {
        customer_id: req.params.customer_id
      }
    }
  ).then(customer => {     
    res.send(JSON.stringify({statusCode:200, data:customer,messsage:"Record has been updated",status: true }));
  }).catch(err => {
    res.send(JSON.stringify({ statusCode:400,messsage:err,status: false }));
  });
}

/*
*@defination : function user to update record in table
*/
exports.addUser = function(req,res) {
  console.log(res.body);
  customers.create({
    zip_code:        req.body.zip_code,
    address:         req.body.address,
    city:            req.body.city,
    state:           req.body.state, 
    customer_name:   req.body.customer_name,
    customer_id:     req.body.customer_id
  }).then(customer => {     
  res.send(JSON.stringify({statusCode:200, data:customer,messsage:"Record has been Added",status: true }));
  }).catch(err => {
    res.send(JSON.stringify({ statusCode:400,messsage:err,status: false }));
  });
}


/*
*@defination : function user to update record in table
*/
exports.deleteUser = function(req,res) {
  customers.destroy({
    where: {
      customer_id : req.params.customer_id
    }
  }).then(customer => {     
  res.send(JSON.stringify({ statusCode:200,data:customer,messsage:"Record has been Deleted",status: true }));
}).catch(err => {
    res.send(JSON.stringify({ statusCode:400,messsage:err,status: false }));
  });
}

