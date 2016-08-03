import React, { PropTypes, Component } from 'react';

class Footer extends Component {
  render() {
    const {
      numIncomplete,
      canClearCompleted,
      clearCompleted,
      showAll,
      showActive,
      showCompleted
    } = this.props;

    const numIncompleteText = numIncomplete === 1 ? 'item left' : 'items left';

    return (
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
      </div>
    );
  }
}

Footer.propTypes = {
  canClearCompleted: PropTypes.bool.isRequired,
  numIncomplete: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired,
  showActive: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired
};

export default Footer;
