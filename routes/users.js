'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');

router.post('/users', (req, res, next) => {

  if( !req.body.email || email.trim() ===''){

    return res
      .status(400)
      .set('Content-Type', 'text/plain')
      .send('user did not email');
  }

  if( !req.body.password || password.trim() ===''){

    return res
      .status(400)
      .set('Content-Type', 'text/plain')
      .send('user did not password');
  }

var email = knex('users').where({
  email:req.body.email
}).select('email');
if(email.length > 0) {


  return res
    .status(400)
    .set('Content-Type', 'text/plain')
    .send('user already exists');
}
// knex('users')
// .select(knex.raw('1=1'))
// .where('email', email)
//  .first()
//  .then((exists) => {
//    if (exists) {
//      return res.....
//    }
//  })

  bcrypt.hash(req.body.password, 12, (err, hashed_password) => {
    if (err) {
      return next(err);
    }


    knex('users')
      .insert({
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email: req.body.email,
        hashed_password: hashed_password
      }, '*')
      .then((users) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        next(err);
      });
  });
});

module.exports = router;
