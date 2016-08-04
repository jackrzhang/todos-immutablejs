import { connect } from 'react-redux';
import { completeTodo } from './todosActions';
import Todos from './Todos.view';

import { ALL, ACTIVE, COMPLETED } from './../footer/filterTypes';

const applyFilter = (todos, filter) => {
  switch (filter) {
    case ALL:
      return todos;
    case ACTIVE:
      return todos.filter(todo => !todo.get('complete'));
    case COMPLETED:
      return todos.filter(todo => todo.get('complete'));
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: applyFilter(state.get('todos'), state.get('filter'))
});

const mapDispatchToProps = dispatch => ({
  completeTodo: id => {
    dispatch(completeTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
