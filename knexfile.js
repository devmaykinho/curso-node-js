// Update with your config settings.

export default {

  development: {
    client: 'postgresql',
    connection: {
      port: '5434',
      database: 'stock',
      user:     'adm',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
