'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        max: {
          args: 254,
          msg: 'Your first name can only be 254 caracters.'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        max: {
            args: 254,
            msg: 'Your last name can only be 254 caracters.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Looks like you already have an account with this email address. Please try to login.',
        fields: [sequelize.fn('lower', sequelize.col('email'))]
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        }
      }
    },
    password_digest: {
      type: DataTypes.STRING
    },
    birthdate: {
      type: DataTypes.DATE
    },
    gender: {
      type: DataTypes.ENUM('M', 'F')
    },
    mobileNum: {
      type: DataTypes.STRING
    }
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};