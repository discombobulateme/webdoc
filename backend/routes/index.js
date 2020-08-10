var express = require('express')
var router = express.Router()

/* GET home page. */
// index connects with views/index.pug
router.get('/', function (req, res, next) {
  res.render('index', { title: 'A brazilian base jump history' })
})

module.exports = router
