import React, { PropTypes, Component } from 'react';

class Footer extends Component {
  render() {
    const { numIncomplete, canClearCompleted, clearCompleted } = this.props;
    const numIncompleteText = numIncomplete === 1 ? 'item left' : 'items left';

    return (
      <div>
        <span>{`${numIncomplete.toString()} ${numIncompleteText}`}</span>
        <span>Filters</span>
        {canClearCompleted ?
          <span
            onClick={clearCompleted}
          >
            Clear completed
          </span> :
          <span />
        }
      </div>
    );
  }
}

Footer.propTypes = {
  canClearCompleted: PropTypes.bool.isRequired,
  numIncomplete: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired
};

export default Footer;
