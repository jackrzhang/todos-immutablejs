import React, { Component, PropTypes } from 'react';
import styles from './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.submitInput = this.submitInput.bind(this);
  }

  submitInput(event) {
    const text = event.target.value;
    if (event.which === 13 && text.trim() !== '') {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <div className={styles.input}>
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={this.submitInput}
        />
      </div>
    );
  }
}

Input.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Input;
