'use strict'

exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('books', (table)=> {
      table.increments('id').primary();
      table.integer('author_id')
        .notNullable()
        .references('id')
        .inTable('authors');
      table.string('title')
        .notNullable()
        .defaultTo('');
      table.string('genre')
        .notNullable()
        .defaultTo('');
      table.text('description')
        .notNullable()
        .defaultTo('');
      table.text('cover_url')
        .notNullable()
        .defaultTo('');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books', (table)=> {
    table.dropForeign('author_id');
  });
};
