import React, { Component, PropTypes } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.completeTodo = this.completeTodo.bind(this);
  }

  completeTodo() { this.props.completeTodo(this.props.id); }

  render() {
    const { text } = this.props;
    return (
      <div>
        <span
          onClick={this.completeTodo}
        >
          &#10003;
        </span>
        <span>
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
