export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

export const toggleCompleted = id => ({
  type: TOGGLE_COMPLETED,
  id
});
