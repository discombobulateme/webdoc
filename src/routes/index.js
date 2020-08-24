const express = require('express')

const router = express.Router()

/* GET home page. */
// index connects with views/index.pug
router.get('/', (req, res) => {
  res.render('index', { title: 'A brazilian base jump history' })
})

module.exports = router
