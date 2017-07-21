const
  router = require('express').Router()

router.get('/:name/products', function (req, res) {
  res.render('', {})
})

router.post('/', function (req, res) {
  res.render('', {})
})

router.delete('/:name', function (req, res) {
  res.render('', {})
})

router.post('/:name/products/', function (req, res) {
  res.render('', {})
})

router.delete('/:name/products/:id', function (req, res) {
  res.render('', {})
})

module.exports = router
