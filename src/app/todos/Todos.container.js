import { connect } from 'react-redux';
import { completeTodo } from './todosActions';
import Todos from './Todos.view';

const mapStateToProps = state => ({
  todos: state.todos
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
