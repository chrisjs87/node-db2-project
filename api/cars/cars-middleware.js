const Cars = require('./cars-model')
const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {
  // Cars.getById(req.params.id)
  //   .then(car => {
  //     if (!car) {
  //       res.status(404).json({ message: `car with id ${req.params.id} is not found` })
  //       next()
  //     } else {
  //       req.car = car
  //       next()
  //     }
  //   })
  try {
    const car = await Cars.getById(req.params.id)
    if (!car) {
      next({ status: 404, message: `car with id ${req.params.id} is not found` })
    } else {
      req.car = car
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if (vin === undefined) {
    res.status(400).json({ message: `vin is missing` })
  } else if (make === undefined) {
    res.status(400).json({ message: `make is missing` })
  } else if (model === undefined) {
    res.status(400).json({ message: `model is missing` })
  } else if (mileage === undefined) {
    res.status(400).json({ message: `mileage is missing` })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  if (vin.validate(req.body.vin)) {
    next()
  } else {
    next({ status: 400, message: `vin ${req.body.vin} is invalid` })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existing = await Cars.getByVin(req.body.vin)
    if (!existing) {
      next()
    } else {
      next({ status: 400, message: `vin ${req.body.vin} already exists`})
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
