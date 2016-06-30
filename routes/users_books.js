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
  .innerJoin('books', 'users_books.book_id','books.id' )
    .where('users_books.id', userId)
    .then((users) => {
      res.send(users_books)
    })
    .catch((err) => {
      next(err);
    });
});



router.post('/users/books/:id', checkAuth, (req, res, next) =>{
  const userId = req.session.user.id;
  const bookId = Number.parseInt(req.params.book_id);

  knex('users_books')
    .insert({
      book_id: bookId,
      user_id: userId

    })
    .then((users_books) => {
      res.send(users_books[0])
    })
    .catch((err) => {
      next(err)
    });
});

module.exports = router;
