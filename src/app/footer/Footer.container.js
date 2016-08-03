import { connect } from 'react-redux';
import { clearCompleted, applyFilter } from './footerActions';
import { ALL, ACTIVE, COMPLETED } from './filterTypes';

import Footer from './Footer.view';

const mapStateToProps = state => ({
  showFooter: state.todos.length !== 0,
  canClearCompleted: state.todos.some(todo => todo.complete),
  numIncomplete: state.todos.reduce((count, todo) => !todo.complete ? count + 1 : count, 0)
});

const mapDispatchToProps = dispatch => ({
  clearCompleted: () => {
    dispatch(clearCompleted());
  },
  showAll: () => {
    dispatch(applyFilter(ALL));
  },
  showActive: () => {
    dispatch(applyFilter(ACTIVE));
  },
  showCompleted: () => {
    dispatch(applyFilter(COMPLETED));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
