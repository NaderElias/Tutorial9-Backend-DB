const config = {
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : 'yt8750yg',
      database : 'postgres'
    }
  };

  module.exports = require('knex')(config);