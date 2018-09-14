import express from 'express';
import bcrypt from 'bcryptjs';

let router = express.Router();

router.post('/', (req, res) => {
  // validateInput(req.body, commonValidations)
  //   .then(({errors, isValid}) => {
  //     if(isValid){
  //       const {username, password, timezone, email} = req.body;
  //       const password_digest = bcrypt.hashSync(password, 10);
    
  //       User.forge({
  //         username, timezone, email, password_digest
  //       }, {hasTimestamps: true}).save()
  //         .then(user => {
  //           res.json({
  //             success: true
  //           });
  //         })
  //         .catch(err => {
  //           res.status(500).json({error: err});
  //         });
  //     }else{
  //       res.status(400).json(errors);
  //     }
  //   });
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
    .then(function (user) {
      res.send({
        success: true,
        data: {
          user
        }
      });
    })
    .catch(function (err) {
      res.status(503)
        .send({
          success: false,
          data: null,
          error: err.message
        });
    });
});

// find a specific user
router.get('/:email', (req, res) => {
  const {email} = req.params;
  req._models.Users.findOne({
    where: {
      email
    }
  }).then(user => {
    const {firstName, lastName} = user;
    res.status(200)
      .send({
        success: true,
        data: {
          firstName,
          lastName
        }
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