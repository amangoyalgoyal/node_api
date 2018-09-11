'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sequelize = require('sequelize');
  const Department = sequelize.define('Department', {
    departmentName: Sequelize.STRING,
    hodName: Sequelize.STRING,
    email: Sequelize.STRING,
    companyName: Sequelize.STRING,
    companyLocation: Sequelize.STRING
  }, {});
  Department.associate = function(models) {
    // associations can be defined here
  };
  return Department;
};