// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      // 'postgres://postgres:docker@localhost/movie-list-table'
      host: '127.0.0.1',
      password: 'docker',
      user: 'postgres',
      port: 5432,
      database: 'movie_list_database'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'movie_list_database',
      user:     'postgres',
      password: 'docker',

    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
  }

};
