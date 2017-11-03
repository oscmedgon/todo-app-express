const { completeAllTask } = require('../../services/tasks')

function _completeAllTask (req, res) {
  completeAllTask()
  res.status(200).send(`All tasks completed!`)
}

module.exports = _completeAllTask
