'use strict';

module.exports = {
  development:{
    client: 'pg',
    connection:  'postgres://localhost/bookshelf_dev'
  },
  test: {
    client:'pg',
    connection: 'postgres://localhost/bookshelf_test'
  },
  production: {
    client:'postgresql',
    connections: process.env.DATABASE_URL
  }
};
