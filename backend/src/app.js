const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const cors = require('cors')
// import the model that is used for authentication
const Athlete = require('./models/athlete')

const mongooseConnection = require('./database-connection')

const indexRouter = require('./routes/index')
const athletesRouter = require('./routes/athletes')
const accountsRouter = require('./routes/accounts')

const app = express()

if (app.get('env') == 'development') {
  /* eslint-disable-next-line */
  app.use(require('connect-livereload')())
  /* eslint-disable-next-line */
  require('livereload')
    .createServer({ extraExts: ['pug'] })
    .watch([`${__dirname}/public`, `${__dirname}/views`])
}

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// express-session connect-mongo
app.use(
  session({
    secret: ['howtomakethisprotectedisachallange', 'thisisavalidatorformyfirstsecretsecret'],
    store: new MongoStore({ mongooseConnection, stringify: false }),
    cookie: {
      // our session expires in 30 day in milliseconds
      maxAge: 30 * 24 * 60 * 60 * 1000,
      // make cookies available only for api requests
      path: '/api',
    },
  })
)

// this is the passport middleware
// this should come after session declaration!
app.use(passport.initialize())
app.use(passport.session())

// Configure passport-local to use a model for authentication
passport.use(Athlete.createStrategy())

passport.serializeUser(Athlete.serializeUser())
passport.deserializeUser(Athlete.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

// this is a prototype to track user, in case we need to block it in the future
app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  req.session.viewCount++
  next()
})

app.use('/api/', indexRouter)
app.use('/api/account', accountsRouter)
app.use('/api/athletes', athletesRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
// eslint-disable-next-line
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
