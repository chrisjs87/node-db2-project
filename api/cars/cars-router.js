const express = require('express')
const Cars = require('./cars-model')
const mw = require('./cars-middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
  // Cars.getAll()
  //   .then(cars => {
  //     res.status(200).json(cars)
  //   })
  try {
    const cars = await Cars.getAll()
    res.json(cars)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', mw.checkCarId,  async (req, res, next) => {
  res.json(req.car)
})

router.post('/', mw.checkCarPayload, mw.checkVinNumberValid, mw.checkVinNumberUnique, (req, res) => {
  
  // Cars.create(req.body)
  //   .then(id => {
  //     Cars.getById(id)
  //       .then(car => {
  //         res.status(201).json(car)
  //       })
  //   })

  Cars.create(req.body)
    .then(car => {
      res.json(car)
    })
})


module.exports = router;
