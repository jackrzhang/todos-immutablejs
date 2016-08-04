import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Todo from './Todo';

class Todos extends Component {
  render() {
    const { todos, completeTodo } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <Todo
            key={todo.get('id')}
            id={todo.get('id')}
            text={todo.get('text')}
            complete={todo.get('complete')}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: ImmutablePropTypes.list.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
