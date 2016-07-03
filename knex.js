'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
// const knex = require('knex')(knexConfig);
const knex = require('knex')({client: 'pg', connection: process.env.HEROKU_POSTGRESQL_GREEN_URL});

module.exports = knex;
