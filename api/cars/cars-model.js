const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('car_id', id).first()
}

const create = (car) => {
  console.log("attempting to create")
  // const [id] = await db('cars').insert(car)
  // const newCar = getById(id)
  // return newCar
  return db('cars').insert(car)
}


module.exports = {
  getAll,
  getById,
  create,
}