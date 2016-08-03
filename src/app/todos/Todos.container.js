import { connect } from 'react-redux';
import Todos from './Todos.view';

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps
)(Todos);
