'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};