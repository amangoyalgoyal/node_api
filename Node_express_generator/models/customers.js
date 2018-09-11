"use strict";
module.exports = function(sequelize, DataTypes) {


  var Sequelize = require('sequelize');


    var Customers = sequelize.define('customers', {
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true 
    },
    address: {
      type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    zip_code: {
        type: Sequelize.STRING
    },
    customer_name: {
        type: Sequelize.STRING
    },
    dateJoined: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },{
    timestamps: false,
    tableName: 'customers',
    dateJoined: false,
  });
  return Customers;
};