'use strict';

exports.up = function(knex, Promise) {
    return knex.create('authors', (table)=> {
      table.increments();
      table.string('first_name').notNullable().defaultTo('');
      table.string('last_name').notNullable().defaultTo('');
      table.string('biography').notNullable().defaultTo('');
      table.string('portrait_url').notNullable().defaultTo('');
      table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.dropTable('authors');
};

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
