const { addTask } = require('../../services/tasks')

function _addTask (req, res) {
  const { title } = req.body
  addTask(title)
  res.redirect('/')
}

module.exports = _addTask
