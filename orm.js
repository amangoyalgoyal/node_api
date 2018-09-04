var http = require('http');
const Sequelize = require('sequelize');
var express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

//this is required for fetching body parameters
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


const sequelize = new Sequelize('dbname', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});
const DataTypes = sequelize.DataTypes;

//get the instance of model to perform operations on it
var customers  = require('./model/customers')(sequelize, DataTypes);



/*
*Api for get a particular record from database
*/
app.get('/user/:customer_id',function(req, res){

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    customers.findOne(
      { 
        where: {
          customer_id: req.params.customer_id
        }
        ,attributes : ['customer_id', 'zip_code', 'address', 'city', 'state', 'customer_name']
      }).then(customer => {     
      res.send(JSON.stringify({ data:customer,messsage:"Record has been fetched",error: false,status: true }));
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
});

//end of get api



/*
*Api for get all the records from database
*/
app.get('/user/',function(req, res){
 
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      customers.findAll(
        { 
          attributes : ['customer_id', 'zip_code', 'address', 'city', 'state', 'customer_name']
        }).then(customer => {     
        res.send(JSON.stringify({ data:customer,messsage:"Record has been fetched",error: false,status: true }));
      });
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  });
  
  //end of get api


  /*
*Api for update records in database database
*/
app.put('/user/:customer_id',function(req, res){
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully update records .');
      customers.update(
        {
          zip_code:        req.body.zip_code,
          address:         req.body.address,
          city:            req.body.city,
          state:            req.body.state, 
          customer_name:     req.body.customer_name
        },{
          where: {
            customer_id: req.params.customer_id
          }
        }
      ).then(customer => {     
        res.send(JSON.stringify({ data:customer,messsage:"Record has been updated",error: false,status: true }));
      });
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  });
  //end of get api

  /*
*Api for add records in database database
*/
app.post('/user',function(req, res){
  console.log(JSON.stringify(req.body));
  console.log(req.body);
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully update records .');
      customers.create({
          zip_code:        req.body.zip_code,
          address:         req.body.address,
          city:            req.body.city,
          state:           req.body.state, 
          customer_name:   req.body.customer_name,
          customer_id:     req.body.customer_id
        }).then(customer => {     
        res.send(JSON.stringify({ data:customer,messsage:"Record has been Added",error: false,status: true }));
      });
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  });
  //end of get api




  /*
*Api for delete records in database database
*/
app.delete('/user/:customer_id',function(req, res){
  console.log(JSON.stringify(req.body));
  console.log(req.body);
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully update records .');
      customers.destroy({
          where: {
            customer_id : req.params.customer_id
          }
        }).then(customer => {     
        res.send(JSON.stringify({ data:customer,messsage:"Record has been Deleted",error: false,status: true }));
      });
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  });
  //end of get api



  /*
*Api for making customer query in database
*/
app.patch('/user/',function(req, res){
 
  sequelize
    .authenticate()
    .then(() => {

      sequelize.query("ALTER TABLE customers ADD dateJoined  datetime").spread((results, metadata) => {
        res.send(JSON.stringify({ data:results,messsage:"Table has been updated",error: false,status: true }));
      })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  });
});
  
  //end of get api

app.listen(8080, () => console.log('Example app listening on port 8080!'));