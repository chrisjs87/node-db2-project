const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  // return db('cars').where('car_id', id).first()
}

const create = async (car) => {
  // const [id] = await db('cars').insert(car)
  // const newCar = getById(id)
  // return newCar
}

module.exports = {
  getAll,
  getById,
  create,
}