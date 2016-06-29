'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/books', (_req, res, next) => {
  knex('books')
    .orderBy('id')
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/books/:id', (req, res, next) => {
  knex('books')
    .where('id', req.params.id)
    .first()
    .then((book) => {
      if (!book) {
        return next();
      }

      res.send(book);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/books', (req, res, next) => {
  knex('authors')
    .where('id', req.body.artist_id)
    .first()
    .then((artist) => {
      if (!artist) {
        return res
          .status(400)
          .set('Content-Type', 'text/plain')
          .send('artist_id does not exist');
      }

      return knex('books')
        .insert(req.body, '*')
        .then((results) => {
          res.send(results[0]);
        });
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/books/:id', (req, res, next) => {
  knex('books')
    .where('id', req.params.id)
    .first()
    .then((book) => {
      if (!book) {
        return next();
      }

      return knex('authors')
        .where('id', req.body.artist_id)
        .first()
        .then((artist) => {
          if (!artist) {
            return res
              .status(400)
              .set('Content-Type', 'text/plain')
              .send('artist_id does not exist');
          }

          return knex('books')
            .update(req.body, '*')
            .where('id', req.params.id)
            .then((results) => {
              res.send(results[0]);
            });
        });
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/books/:id', (req, res, next) => {
  knex('books')
    .where('id', req.params.id)
    .first()
    .then((book) => {
      if (!book) {
        return next();
      }

      return knex('books')
        .del()
        .where('id', req.params.id)
        .then(() => {
          delete book.id;
          res.send(book);
        });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
