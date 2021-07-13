const express = require('express')
const Cars = require('./cars-model')
const mw = require('./cars-middleware')

const router = express.Router()

router.get('/', (req, res) => {
  Cars.getAll()
    .then(cars => {
      res.status(200).json(cars)
    })
})

router.get('/:id', mw.checkCarId, (req, res) => {
  res.json(req.car)
})

router.post('/', (req, res) => {
  console.log("post new car router")
})


module.exports = router;
