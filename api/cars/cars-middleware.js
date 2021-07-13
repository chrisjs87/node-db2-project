const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
    .then(car => {
      if (!car) {
        res.status(404).json({ message: `car with id ${req.params.id} is not found` })
        next()
      } else {
        req.car = car
        next()
      }
    })
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
