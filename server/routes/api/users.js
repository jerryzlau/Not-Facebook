import express from 'express';
import bcrypt from 'bcryptjs';

let router = express.Router();

router.get('/', (req, res) => {
  console.log('yoooooo');
  req._models.Users.findAll().then(users => {
    res.json({users});
  });
});

module.exports = router;