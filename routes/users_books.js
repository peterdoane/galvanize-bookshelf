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
    .then((usersBooks) => {
      res.json(usersBooks)
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/books/:id', checkAuth, (req, res, next) => {
  const userId = req.session.user.id;
  const bookId = req.params.id;

  knex('users_books')
  .innerJoin('books', 'users_books.book_id','books.id' )
  .where('users_books.id', userId)
  .then((usersBooks) => {
    var filteredById = usersBooks.filter(book => {
      if (book.id == bookId) {
        return book;
      }
    });

      if(filteredById.length < 1){
          res.send(404);
      } else {
        res.send(filteredById[0])
      }

  })
  .catch((err) => {
    next(err);
  });

});



router.post('/users/books/:id', checkAuth, (req, res, next) =>{
  const userId = parseInt(req.session.user.id);
  const bookId = parseInt(req.params.id);

  knex('users_books')
    .insert({
      book_id: bookId,
      user_id: userId
    },'*')
    .then((users_books) => {
      res.json(users_books[0])
    })
    .catch((err) => {
      next(err)
    });
});

router.delete('/users/books/:id', checkAuth, (req, res, next) => {
  const userId = parseInt(req.session.user.id);
  const bookId = parseInt(req.params.id);
if(Number.isNaN(bookId)) {
  return next();
}
  knex('users_books')
    .where({
      book_id: bookId,
      user_id: userId
    })
    .first()
    .then((user_book) => {
      if(!user_book) {
        return next()
      }
      return knex('users_books')
        .del()
        .where({
          book_id: bookId,
          user_id: userId
        })
        .then(() => {
          delete user_book.id;
          res.send(user_book)
        })
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
