var express = require('express')
var router = express.Router()

/* GET users listing. */
// http://localhost:3000/register
router.get('/', function (req, res, next) {
  res.render('register', { title: 'Register Page' })
})

module.exports = router
