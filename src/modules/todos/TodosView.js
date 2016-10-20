import React from 'react';
import { Button } from '../../components';

const TodosView = ({ todos, addTodo, toggleCompleted }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const todo = form.querySelector('[name="todo"]').value;

    addTodo(todo);

    e.target.querySelector('[name="todo"]').value = '';
  }

  return (
    <div>
      <h2>{todos.filter(todo => todo.completed).length} completed / {todos.length} todos</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="todo" placeholder="Add new todo" />
        <Button type="submit">
          Add new Todo
        </Button>
      </form>
      <div>
        <ul style={{ listStyle: 'none' }}>
          {todos.map((todo, i) => (
            <li key={i} style={todo.completed ? { color: 'red' } : null}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default TodosView;
