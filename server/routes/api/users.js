let router = express.Router();
import express from 'express';
import bcrypt from 'bcryptjs';
import isEmpty from 'lodash/isEmpty';
import sharedValidator from '../../../shared/validation/signup';

function validateInput(Users, data, otherValidations){
  let {errors} = otherValidations(data);
  return Users.findOne({
    attributes: ['email'],
    where: {
      email: data.email
    }
  }).then(user => {
    if(user){
      errors.email = "Email is taken";
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  });
}

router.post('/', (req, res) => {  
  validateInput(req._models.Users, req.body, sharedValidator)
  .then(({errors, isValid}) => {
    if(isValid){
        const {
          firstName,
          lastName,
          email,
          password,
          birthMonth,
          birthDay,
          birthYear,
          gender
        } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);
        const birthdate = new Date(`${birthYear}-${birthMonth}-${birthDay} 00:00:00`);
        const newUserData = {
          firstName,
          lastName,
          email,
          password_digest,
          birthdate,
          gender
        };
        const newUser = req._models.Users.build(newUserData);
        newUser.save()
          .then(function (data) {
            res.send({
              success: true,
              data
            });
          })
          .catch(function (err) {
            res.status(503)
              .send({
                success: false,
                error: err
              });
          });
      }else{
        res.status(400).json(errors);
      }
    });
});

// find a specific user
router.get('/:email', (req, res) => {
  const {email} = req.params;
  req._models.Users.findOne({
    attributes: ['firstName', 'lastName', 'email'],
    where: {
      email
    }
  }).then(data => {
    res.status(200)
      .send({
        success: true,
        data
    });
  }).catch(err => {
    res.status(404)
      .send({
        success: false,
        error: 'User not found'
      });
  });
});

module.exports = router;