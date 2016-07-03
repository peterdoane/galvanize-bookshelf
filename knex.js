'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = {
  client:'pg',
  connections: 'postgres://qzzvlzfozkoeze:4MFih9CpuXhCtSU8kR03wyen6O@ec2-54-225-81-90.compute-1.amazonaws.com:5432/d8bnjteijkss8l'
};
