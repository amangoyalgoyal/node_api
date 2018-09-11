'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Departments',
        'companyName',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Departments',
        'companyLocation',
        {
          type: Sequelize.STRING
        }
      )
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Departments', 'companyName'),
      queryInterface.removeColumn('Departments', 'companyLocation')
    ];
  }
};