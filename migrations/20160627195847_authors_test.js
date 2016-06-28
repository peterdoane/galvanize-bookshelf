'use strict';

exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('authors', (table)=> {
      table.increments('id').primary();
      table.string('first_name')
        .notNullable()
        .defaultTo('');
      table.string('last_name')
        .notNullable()
        .defaultTo('');
      table.text('biography')
        .notNullable()
        .defaultTo('');
      table.text('portrait_url')
        .notNullable()
        .defaultTo('');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('authors');
};



// exports.up = function(knex, Promise) {
//
//
//     return Promise.all([
//
//         knex.schema.createTable('users', function(table) {
//             table.increments('uid').primary();
//             table.string('username');
//             table.string('password');
//             table.string('name');
//             table.string('email');
//             table.timestamps();
//         }),
//
//         knex.schema.createTable('posts', function(table){
//             table.increments('id').primary();
//             table.string('title');
//             table.string('body');
//             table.integer('author_id')
//                  .references('uid')
//                  .inTable('users');
//             table.dateTime('postDate');
//         }),
//
//         knex.schema.createTable('comments', function(table){
//             table.increments('id').primary();
//             table.string('body');
//             table.integer('author_id')
//                  .references('uid')
//                  .inTable('users');
//             table.integer('post_id')
//                  .references('id')
//                  .inTable('posts');
//             table.dateTime('postDate');
//         })
//     ])
// };
// exports.up = function(knex) {
//   return knex.schema.createTable('tracks', (table) => {
//     table.increments();
//     table
//         .integer('artist_id')
//         .notNullable()
//         .references('id')
//         .inTable('artists')
//         .onDelete('CASCADE')
//         .index();
//     table.string('title').notNullable().defaultTo('');
//     table.integer('likes').notNullable().defaultTo(0);
//     table.timestamps(true, true);
//   });
// };
//
// exports.down = function(knex) {
//     return knex.schema.dropTable('tracks');
//
// };

// 'use strict';
//
// exports.up = function(knex) {
//   return knex.schema.createTable('artists', (table)=> {
//     table.increments();
//     table.string('name').notNullable().defaultTo('');
//     table.timestamps(true, true);
//   });
// };
//
// exports.down = function(knex) {
//   return knex.schema.dropTable('artists');
// };
