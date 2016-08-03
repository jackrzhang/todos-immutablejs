import { connect } from 'react-redux';
import Input from './Input.view';

import { addTodo } from './inputActions';

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Input);
