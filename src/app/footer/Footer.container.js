import { connect } from 'react-redux';
import { clearCompleted, applyFilter } from './footerActions';
import { ALL, ACTIVE, COMPLETED } from './../../state/filterTypes';

import Footer from './Footer.view';

const mapStateToProps = state => ({
  showFooter: state.get('todos').size !== 0,
  canClearCompleted: state.get('todos').some(todo => todo.get('complete')),
  numIncomplete: state.get('todos')
    .reduce((count, todo) => !todo.get('complete') ? count + 1 : count, 0),
  showAll: state.get('filter') === ALL,
  showActive: state.get('filter') === ACTIVE,
  showCompleted: state.get('filter') === COMPLETED
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
