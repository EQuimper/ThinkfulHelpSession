import { connect } from 'react-redux';
import TodosView from './TodosView';
import { addTodo, toggleCompleted } from './TodosActions';

// const mapState = state => ({ todos: state.todos });

export default connect(
  state => ({
    todos: state.todos
  }),
  { addTodo, toggleCompleted }
)(TodosView);
