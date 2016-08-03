import React, { PropTypes, Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {
    const { todos, completeTodo } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            complete={todo.complete}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
