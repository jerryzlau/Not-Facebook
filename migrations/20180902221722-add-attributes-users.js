'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Users',
        'gender', {
          type: Sequelize.ENUM('Male', 'Female'),
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'Users',
        'birthdate', {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'Users',
        'mobileNum', {
          type: Sequelize.STRING
        }
      )
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Users', 'gender'),
      queryInterface.removeColumn('Users', 'birthdate'),
      queryInterface.removeColumn('Users', 'mobileNum')
    ];
  }
};
