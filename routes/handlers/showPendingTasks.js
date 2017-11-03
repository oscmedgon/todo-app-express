const { getPendingTasks } = require('../../services/tasks')

function showPendingTasks (req, res) {
  const title = 'TODO Tasks'
  const todoTasks = getPendingTasks()
  res.render('todo', { tasks: todoTasks, title })
}

module.exports = showPendingTasks
