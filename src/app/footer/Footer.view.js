import React, { PropTypes, Component } from 'react';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

import styles from './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    const {
      showFooter,
      numIncomplete,
      canClearCompleted,
      clearCompleted,
      showAll,
      showActive,
      showCompleted,
      filterAll,
      filterActive,
      filterCompleted
    } = this.props;

    const numIncompleteText = numIncomplete === 1 ? 'item left' : 'items left';

    return showFooter ?
      <div className={styles.footer}>
        <span className={styles.remaining}>
          {`${numIncomplete.toString()} ${numIncompleteText}`}
        </span>

        <div className={styles.filters}>
          <span
            className={showAll ? `${styles.filter} ${styles.current}` : styles.filter}
            onClick={filterAll}
          >
            All
          </span>
          <span
            className={showActive ? `${styles.filter} ${styles.current}` : styles.filter}
            onClick={filterActive}
          >
            Active
          </span>
          <span
            className={showCompleted ? `${styles.filter} ${styles.current}` : styles.filter}
            onClick={filterCompleted}
          >
            Completed
          </span>
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
  showAll: PropTypes.bool.isRequired,
  showActive: PropTypes.bool.isRequired,
  showCompleted: PropTypes.bool.isRequired,
  filterAll: PropTypes.func.isRequired,
  filterActive: PropTypes.func.isRequired,
  filterCompleted: PropTypes.func.isRequired
};

export default Footer;
