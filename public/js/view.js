document.addEventListener('DOMContentLoaded', (e) => {

  // your code here...

  // select DOM elements
  const form = document.getElementById('todo-form')
  const newTodoInput = document.querySelector('input.new-item')

  // add listeners
  form.addEventListener('submit', e => {
    e.preventDefault()
    const text = newTodoInput.value

    // POST data to backend
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))
  })



  // input
  // form



  // using ajax method we will post data to backend

});