'use strict';

// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const knex = require('../knex');
//
// router.post('/users', (req, res, next) => {
//   bcrypt.hash(req.body.password, 12, (err, hashed_password) => {
//     if (err) {
//       return next(err);
//     }
//
//     knex('users')
//       .insert({
//         email: req.body.email,
//         hashed_password: hashed_password
//       }, '*')
//       .then((users) => {
//         res.sendStatus(200);
//       })
//       .catch((err) => {
//         next(err);
//       });
//   });
// });
//
// module.exports = router;
