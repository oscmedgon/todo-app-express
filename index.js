const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const cookieSession = require('cookie-session')
require('dotenv').load()
const app = express()

const routes = require('./routes')
const { setTasks } = require('./services/tasks')

app.set('view engine', 'pug')
app.locals.moment = moment

app.use(express.static('public'))

app.use(cookieSession({
  name: 'jm-cookie-session',
  keys: ['MIIJJwIBAAKCAgB/EUOgBRntt2CTVGcYsEQTcCt5ityKUw==']
}))

app.use((req, res, next) => {
  req.session.tasks = req.session.tasks || []
  setTasks(req.session.tasks)
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(43000)
console.log('Listening on PORT 43000...')
