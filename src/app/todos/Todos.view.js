import React, { PropTypes, Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            complete={todo.complete}
          />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
