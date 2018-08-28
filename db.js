var mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbname'
};


var connection = null;
const getInstance =  function(){
    connection = mysql.createConnection(config);
    connection.connect();
    return connection;
}

const executeQuery = function(query,returnFunction){
connection.query(query,returnFunction);
}

const closeConnection = function(){
    connection.end();
}

module.exports = {
    getInstance,
    executeQuery,
    closeConnection
}
