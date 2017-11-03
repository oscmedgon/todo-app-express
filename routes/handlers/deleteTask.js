const { deleteTask } = require('../../services/tasks')

function _deleteTask (req, res) {
  const { id } = req.body
  deleteTask(id, req)
  res.status(200).send(`task w/ id ${id} deleted!`)
}

module.exports = _deleteTask
