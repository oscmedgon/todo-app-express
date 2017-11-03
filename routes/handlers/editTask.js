const { editTask } = require('../../services/tasks')

function _editTask (req, res) {
  const { id, newTask } = req.body
  editTask(id, newTask)
  res.status(200).send(`task w/ id ${id} edited with this data ${newTask}!`)
}

module.exports = _editTask
