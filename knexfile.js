'use strict';

module.exports = {

  production: {
    client:'pg',
    connections: process.env.DATABASE_URL
  }
};
