var express = require('express')
var router = express.Router()
var users = [
  { name: 'palomaaa', age: 15 },
  { name: 'gabyyy', age: 65 },
  { name: 'alina', age: 8 },
  { name: 'hilmi', age: 188 },
  { name: 'jing', age: 1 },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users)
})

// http://localhost:3000/users/paloma
router.get('/:userId', function (req, res, next) {
  res.send(users[req.params.userId])
})

module.exports = router
