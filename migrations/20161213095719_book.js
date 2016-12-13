
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', (table) =>{
    table.increments('ID');
    table.string('Title', (150)).notNullable();
    table.integer('Page_Count');
    table.string('Programming_Languages', (100)).nullable();
    table.string('ISBN',(50));




  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book');
};
