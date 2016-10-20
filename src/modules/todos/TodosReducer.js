import {
  ADD_TODO,
  TOGGLE_COMPLETED
} from './TodosActions';

const INITIAL_STATE = [
  {
    text: 'Walk the dog',
    completed: false,
    id: Math.floor(Math.random() * 100) + 1
  },
  {
    text: 'TODO2',
    completed: true,
    id: Math.floor(Math.random() * 100) + 1
  },
  {
    text: 'TODO3',
    completed: false,
    id: Math.floor(Math.random() * 100) + 1
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.todo,
          completed: false,
          id: Math.floor(Math.random() * 100) + 1
        }
      ];
    case TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            completed: !todo.completed
          } :
      todo);
    default:
      return state;
  }
};
