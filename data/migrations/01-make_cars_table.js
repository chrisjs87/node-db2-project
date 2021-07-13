exports.up = function (knex) {
  return knex.schema
    .createTable('cars', table => {
      table.increments('car_id')
      table.text('vin', 50)
        .unique()
        .notNullable()
      table.text('make', 50)
        .notNullable()
      table.text('model', 50)
        .notNullable()
      table.integer('mileage', 50)
        .notNullable()
      table.text('title', 50)
      table.text('transmission', 50)
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('cars')
};
