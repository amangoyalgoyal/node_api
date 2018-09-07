const Sequelize = require('sequelize');
var mysql = require('mysql');
var sequelize = null;

const getInstance =  function(){
    if(sequelize==null){
       sequelize = new Sequelize('dbname', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
    });
    }
    return sequelize;
}

module.exports = {
    getInstance
}
