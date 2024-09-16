// STRETCH
exports.seed = function (knex) {
  return knex('cars').truncate()
    .then(() => {
      return knex('cars').insert([
        { vin: "123456", make: "Mitsubishi", model: "Galant", mileage: 100000 },
        { vin: "234567", make: "Pontiac", model: "G6", mileage: 50000 },
        { vin: "345678", make: "Ford", model: "Mustang", mileage: 30000 },
      ])
    })
}