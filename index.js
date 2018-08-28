var http = require('http');
const db = require('./db');
var express = require('express');
const bodyParser = require('body-parser'); 


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const app = express();
/*
* function used for fetch all hte records of user table
*/
app.get('/user', function (req, res) {

  var query = "SELECT * FROM customers";

  //get instance of db or make connection with database 
  const connection = db.getInstance();

  //execute query and get result in callback
  db.executeQuery(query, function (err, rows, fields) {

    //close database connection
  db.closeConnection();

  if (err)
  res.send(JSON.stringify({ messsage:"Error while adding data",error: err,status: true }));

  //send response to client 
  res.send(JSON.stringify({ data:rows, messsage:"Records has been fetched",error: false,status: true }));
});

  });



/*
* function used for store user record in table
*/
app.post('/user', function (req, res) {

  console.log(req.body);


  var query = 'INSERT INTO customers (customer_id,address,city,state,zip_code,customer_name) VALUES  ("'+req.body.customer_id+'", "'+req.body.address+'", "'+req.body.city+'", "'+req.body.state+'", "'+req.body.zip_code+'", "'+req.body.customer_name+'")';
  
  //get instance of db or make connection with database 
  const connection = db.getInstance();

  //execute query and get result in callback
  db.executeQuery(query, function (err, rows, fields) {

  //close database connection
  db.closeConnection();

  if (err)
  res.send(JSON.stringify({ messsage:"Error while adding data",error: err,status: true }));


  //send response to client 
  res.send(JSON.stringify({ messsage:"Record has been added",error: false,status: true }));
});

  });



/*
* function used for delete user record from table
*/
app.delete('/user/:customer_id', function (req, res) {
  console.log("parsm="+req.params.customer_id);
  var query = 'DELETE FROM customers WHERE customer_id = "'+req.params.customer_id+'"';
  
  //get instance of db or make connection with database 
  const connection = db.getInstance();
 
  //execute query and get result in callback
  db.executeQuery(query, function (err, rows, fields) {
 
  //close database connection
  db.closeConnection();
 
  if (err)
  res.send(JSON.stringify({ messsage:"Error while deleting  data",error: err,status: true }));
 
 
  //send response to client 
  res.send(JSON.stringify({ messsage:"Record has been deleted",error: false,status: true }));
 });
 
   });


   /*
* function used for update user record in table
*/
app.put('/user/:customer_id', function (req, res) {

  console.log("address="+JSON.stringify(req.query));

  var query = 'UPDATE  customers SET address=  "'+req.body.address+'", city =  "'+req.body.city+'", state= "'+req.body.state+'", zip_code= "'+req.body.zip_code+'", customer_name= "'+req.body.customer_name+'" WHERE customer_id = "'+req.params.customer_id+'"';
 
  //get instance of db or make connection with database 
  const connection = db.getInstance();
 
  //execute query and get result in callback
  db.executeQuery(query, function (err, rows, fields) {
 
  //close database connection
  db.closeConnection();
 
  if (err)
  res.send(JSON.stringify({ messsage:"Error while updating  data",error: err,status: true }));
 
 
  //send response to client 
  res.send(JSON.stringify({ messsage:"Record has been Updated sucessfully",error: false,status: true }));
 });
 
   });

   

app.listen(8080, () => console.log('Example app listening on port 8080!'))
