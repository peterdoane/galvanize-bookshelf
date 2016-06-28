'use strict'

exports.seed = function(knex) {
  return knex('books').del()
}

.then(() => {
  return knex.raw(
    "SELECT setval('books_id_seq', (SELECT MAX(id) FROM books));"
  );
});
