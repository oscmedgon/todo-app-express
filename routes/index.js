const express = require('express')

const router = express.Router()

const showPendingTasks = require('./handlers/showPendingTasks.js')
const showCompletedTasks = require('./handlers/showCompletedTasks.js')
const addTask = require('./handlers/addTask.js')
const completeTask = require('./handlers/completeTask.js')
const completeAllTask = require('./handlers/completeAllTask.js')
const deleteTask = require('./handlers/deleteTask.js')
const editTask = require('./handlers/editTask.js')

router.get('/login', function (req, res) {
  const loginError = req.session.err
  res.render('login', {loginError})
})
router.post('/login/check', function (req, res) {
  let loginError
  if (req.body.username !== process.env.ADMIN_USER) {
    loginError = 1
  } else if (req.body.password !== process.env.ADMIN_PASSWORD) {
    loginError = 2
  } else {
    req.session.logged = true
  }
  if (req.session.logged) {
    console.log('login success')
    res.redirect('/')
  } else {
    console.log('login failed')
    req.session.err = loginError
    res.redirect('/login')
  }
})
router.use((req, res, next) => {
  if (req.session.logged === true) {
    next()
  } else {
    res.redirect('/login')
  }
})
router.get('/', showPendingTasks)
router.get('/completed', showCompletedTasks)
router.post('/new', addTask)
router.put('/complete_task/', completeTask)
router.put('/complete_tasks/all', completeAllTask)
router.delete('/remove_task', deleteTask)
router.put('/task/edit', editTask)

module.exports = router
