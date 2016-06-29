'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');

router.post('/users', (req, res, next) => {
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
