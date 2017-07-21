const
  app = require('express')(),
  swig = require('swig'),
  routes = require('./routes/categories.js'),
  db = require('./db'),
  port = process.env.PORT || 3000

swig.setDefaults({ cache: false })
app.set('view engine', 'html')
app.engine('html', swig.renderFile)

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.url} ${res.statusCode}`)
  next()
})
app.use(require('method-override')('_method'))
app.use('/categories', routes)

app.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('/public/stylesheets/style.css')
})

app.get('/', function (req, res) {
  res.render('index', { bestSeller: bestSeller})
})

app.listen(port, function () {
  console.log(`listening on port ${port}`)
})
