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

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps
)(Todos);
