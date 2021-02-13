document.addEventListener('DOMContentLoaded', (e) => {

  // your code here...

  // select DOM elements
  const form = document.getElementById('todo-form')
  const newTodoInput = document.querySelector('input.new-item')
  const todoListSpan = document.querySelector('.todo-container')

  const getTodos = () => {
    fetch('/api/todos')
      .then(response => response.json())
      .then(todos => renderTodoList(todos))
  }

  const renderTodoList = todos => {
    const todosHTML = todos.map(todo => {
      return `<li class="list-group-item todo-item">
        <span>${todo.text}</span>
        <input type="text" class="edit" style="display: none;">
        <button data-id="${todo.id}" class="delete btn btn-danger">x</button>
        <button data-id="${todo.id}" class="complete btn btn-primary">✓</button>
      </li>`
    }).join('')
    todoListSpan.innerHTML = todosHTML
  }

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
    .then(getTodos)
    .catch(err => console.error(err))
  })

  const deleteTodo = id => {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE'
    })
    .then(getTodos)
    .catch(err => console.error(err))
  }

  todoListSpan.addEventListener('click', e => {
    const target = e.target
    const id = target.getAttribute('data-id')
    if (e.target.matches('.delete')) {
      deleteTodo(id)
    }
  })

  getTodos()
});