import React, { PropTypes, Component } from 'react';

class Footer extends Component {
  render() {
    const {
      showFooter,
      canClearCompleted,
      numIncomplete,
      clearCompleted,
      showAll,
      showActive,
      showCompleted
    } = this.props;

    const numIncompleteText = numIncomplete === 1 ? 'item left' : 'items left';

    return showFooter ?
      <div>
        <span>{`${numIncomplete.toString()} ${numIncompleteText}`}</span>

        <span>
          <span onClick={showAll}>All</span>
          <span onClick={showActive}>Active</span>
          <span onClick={showCompleted}>Completed</span>
        </span>

        {canClearCompleted ?
          <span
            onClick={clearCompleted}
          >
            Clear completed
          </span> :
          null
        }
      </div> :
      null;
  }
}

Footer.propTypes = {
  showFooter: PropTypes.bool.isRequired,
  canClearCompleted: PropTypes.bool.isRequired,
  numIncomplete: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired,
  showActive: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired
};

export default Footer;
