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
    client:'pg',
    connections: 'postgres://yafionyfjezfcl:BRvo7c93AFeU8kQ-ZdhUap4KCE@ec2-54-243-249-65.compute-1.amazonaws.com:5432/d8gai8b2fp5aar'
  }
};
