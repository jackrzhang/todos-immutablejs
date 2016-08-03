import { connect } from 'react-redux';
import Input from './Input.view';

import { addTodo } from './inputActions';

const mapStateToProps = state => ({
  canShowCaret: state.todos.length !== 0
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
