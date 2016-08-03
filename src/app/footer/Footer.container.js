import { connect } from 'react-redux';
import { clearCompleted } from './footerActions';
import Footer from './Footer.view';

const mapStateToProps = state => ({
  canClearCompleted: state.todos.some(todo => todo.complete),
  numIncomplete: state.todos.reduce((count, todo) => !todo.complete ? count + 1 : count, 0)
});

const mapDispatchToProps = dispatch => ({
  clearCompleted: () => {
    dispatch(clearCompleted());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
