import { connect } from 'react-redux';
import { completeTodo } from './todosActions';
import Todos from './Todos.view';

import { ALL, ACTIVE, COMPLETED } from './../footer/filterTypes';

const applyFilter = (todos, filter) => {
  switch (filter) {
    case ALL:
      return todos;
    case ACTIVE:
      return todos.filter(todo => !todo.complete);
    case COMPLETED:
      return todos.filter(todo => todo.complete);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: applyFilter(state.todos, state.filter)
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
