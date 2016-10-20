import { combineReducers } from 'redux';
import { TodosReducer } from '../../modules/todos';
import UiReducer from './ui';

export default combineReducers({
  todos: TodosReducer,
  ui: UiReducer
});
