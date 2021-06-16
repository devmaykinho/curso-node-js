
export function up (knex) {
    return knex.schema.createTable('db_user', function (table) {
      table.increments('id').primary();
      table.string('username').unique().notNullable();
      table.string('password').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    }).then((result) => {
        return result;
    }).catch((err) => {
        return err;
    })
  };
  
  export function down (knex) {
    return knex.schema.dropTable('db_user');
  };
  