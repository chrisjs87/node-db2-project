const express = require('express')
const Cars = require('./cars-model')

const router = express.Router()

router.get('/', (req, res) => {
  Cars.getAll()
    .then(cars => {
      res.status(200).json(cars)
    })
})

router.get('/:id', (req, res) => {
  console.log("get car by id router")
})

router.post('/', (req, res) => {
  console.log("post new car router")
})


module.exports = router;
