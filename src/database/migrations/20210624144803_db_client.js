
export function up (knex) {
    return knex.schema.createTable('db_client', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('telphone').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    }).then((result) => {
        return result;
    }).catch((err) => {
        return err;
    })
  };
  
  export function down (knex) {
    return knex.schema.dropTable('db_client');
  };
  