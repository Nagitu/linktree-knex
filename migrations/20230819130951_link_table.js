/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('linktree_knex', table =>{
    table.increments('id').primary().notNullable();
    table.string('name').notNullable()
    table.string('links').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) { 
    return knex.schema.dropTableIfExists('linktree_knex')
  
};
