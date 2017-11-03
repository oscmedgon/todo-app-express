const { completeTask } = require('../../services/tasks')

function _completeTask (req, res) {
  const { id } = req.body
  completeTask(id)
  res.status(200).send(`task w/ id ${id} completed!`)
}

module.exports = _completeTask
