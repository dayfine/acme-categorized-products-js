const
  router = require('express').Router(),
  db = require('../db'),
  bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))

router.get('/:name/products', function (req, res) {
  let current = req.params.name, categories = db.getCategoryNames()
  res.render('products', {current: current,
    categories: categories,
    products: db.getProductsByCategory(current)})
})

router.post('/', function (req, res) {
  db.createCategory(req.body.name)
  res.redirect('./')
})

router.delete('/:name', function (req, res) {
  db.deleteCategory(req.params.name)
  res.redirect('/')
})

router.post('/:name/products/', function (req, res) {
  db.createProduct(req.body.product, req.body.price, req.params.name)
  res.redirect('./products')
})

router.delete('/:name/products/:id', function (req, res) {
  db.deleteProduct(req.params.id * 1, req.params.name)
  db.getProductsByCategory(req.params.name)
    ? res.redirect('./')
    : res.redirect('../../../')
})

module.exports = router
