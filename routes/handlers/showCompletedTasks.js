const { getCompletedTasks } = require('../../services/tasks')

function showCompletedTasks (req, res) {
  const title = 'COMPLETED Tasks'
  const completedTasks = getCompletedTasks()
  res.render('completed', { tasks: completedTasks, title })
}

module.exports = showCompletedTasks
