'use strict';

exports.up = function(knex) {
    return knex.schema.create('authors', (table)=> {
      table.increments();
      table.string('first_name').notNullable().defaultTo('');
      table.string('last_name').notNullable().defaultTo('');
      table.string('biography').notNullable().defaultTo('');
      table.string('portrait_url').notNullable().defaultTo('');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.shema.dropTable('authors');
};
//
// exports.up = function(knex, Promise) {
//   return createAddressTable()
//     .then(createMemberTable);
//
//   function createMemberTable() {
//     return knex.schema.createTable('Member', function (table) {
//       table.bigIncrements('id').primary().unsigned();
//       table.string('email',50);
//       table.string('password');
// 
//       /* CREATE FKS */
//       table.bigInteger('ReferralId').unsigned().index();
//       table.bigInteger('AddressId').unsigned().index().inTable('Address').references('id');
//     });
//   }
//
//   function createAddressTable() {
//     return knex.schema.createTable('Address', function (table) {
//       table.bigIncrements('id').primary().unsigned();
//       table.index(['city','state','zip']);
//
//       table.string('city',50).notNullable();
//       table.string('state',2).notNullable();
//       table.integer('zip',5).unsigned().notNullable();
//     });
//   }
// };
