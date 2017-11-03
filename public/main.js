$('.complete-task').on('click', function (e) {
  const id = $(this).data('id')

  const url = '/complete_task'
  const method = 'PUT'
  const data = { id }
  $.ajax({ url, method, data })
      .then(response => {
        window.location.href = '/completed'
      })
})

$('.complete-all-task').on('click', function (e) {
  const url = '/complete_tasks/all'
  const method = 'PUT'
  $.ajax({url, method})
      .then(response => {
        window.location.href = '/completed'
      })
})

$('.remove-task').on('click', function (e) {
  const id = $(this).data('id')

  const url = '/remove_task'
  const method = 'DELETE'
  const data = { id }
  $.ajax({ url, method, data })
      .then(response => {
        window.location.href = '/'
      })
})

$('.remove-completed-task').on('click', function (e) {
  const id = $(this).data('id')

  const url = '/remove_task'
  const method = 'DELETE'
  const data = { id }
  $.ajax({ url, method, data })
      .then(response => {
        window.location.href = '/completed'
      })
})

$('.edit-task').on('submit', function (e) {
  e.preventDefault()
  const id = $(this).data('id')
  const newTask = $(this).find('input').val()
  const data = {id, newTask}
  const url = '/task/edit'
  const method = 'PUT'
  $.ajax({ url, method, data })
      .then(response => {
        window.location.href = '/'
      })
})

$('.edit-button').on('click', function (e) {
  $(this).parent().addClass('edit-mode')
  $(this).parent().find('input').select()

})
