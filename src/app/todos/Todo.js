import React, { Component, PropTypes } from 'react';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

import styles from './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  completeTodo() { this.props.completeTodo(this.props.id); }

  render() {
    const { text, complete } = this.props;
    return (
      <div className={styles.todo}>
        <span
          className={complete ? `${styles.check} ${styles.completed}` : styles.check}
          onClick={this.completeTodo}
        />
        <span
          className={complete ? `${styles.text} ${styles.completed}` : styles.text}
        >
          {text}
        </span>
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todo;
