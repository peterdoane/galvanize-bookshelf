'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

const checkAuth = function(req, res, next) {
  if(!req.session.user) {
    return res.sendStatus(401);
  }

  next();
};

router.get('/users/books', checkAuth, (req, res, next) => {
  const userId = req.session.user.id;

  knex('users_books')
    .innerJoin('users_books', 'authors')
})

// knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id')
//
//
// Outputs:
// select * from `users` inner join `accounts` on `users`.`id` = `accounts`.`user_id`

router.post('/users/books/:id', (req, res, next) =>{
  knex('users_books')
    .insert(req.body, '*')
    .then((users_books) => {
      res.send(users_books[0])
    })
    .catch((err) => {
      next(err)
    });
});

// YOUR CODE HERE

module.exports = router;
