import { connect } from 'react-redux';
import { clearCompleted, applyFilter } from './footerActions';
import { ALL, ACTIVE, COMPLETED } from './filterTypes';

import Footer from './Footer.view';

const mapStateToProps = state => ({
  showFooter: state.todos.length !== 0,
  canClearCompleted: state.todos.some(todo => todo.complete),
  numIncomplete: state.todos.reduce((count, todo) => !todo.complete ? count + 1 : count, 0),
  showAll: state.filter === ALL,
  showActive: state.filter === ACTIVE,
  showCompleted: state.filter === COMPLETED
});

const mapDispatchToProps = dispatch => ({
  clearCompleted: () => {
    dispatch(clearCompleted());
  },
  filterAll: () => {
    dispatch(applyFilter(ALL));
  },
  filterActive: () => {
    dispatch(applyFilter(ACTIVE));
  },
  filterCompleted: () => {
    dispatch(applyFilter(COMPLETED));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
