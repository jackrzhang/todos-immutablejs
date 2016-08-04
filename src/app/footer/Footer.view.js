import React, { PropTypes, Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {
  render() {
    const {
      showFooter,
      numIncomplete,
      canClearCompleted,
      clearCompleted,
      showAll,
      showActive,
      showCompleted
    } = this.props;

    const numIncompleteText = numIncomplete === 1 ? 'item left' : 'items left';

    return showFooter ?
      <div className={styles.footer}>
        <span className={styles.remaining}>
          {`${numIncomplete.toString()} ${numIncompleteText}`}
        </span>

        <div className={styles.filters}>
          <span className={styles.filter} onClick={showAll}>All</span>
          <span className={styles.filter} onClick={showActive}>Active</span>
          <span className={styles.filter} onClick={showCompleted}>Completed</span>
        </div>

        {canClearCompleted ?
          <span
            className={styles.clear}
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
  numIncomplete: PropTypes.number.isRequired,
  canClearCompleted: PropTypes.bool.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired,
  showActive: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired
};

export default Footer;
