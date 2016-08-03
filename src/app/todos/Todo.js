import React, { PropTypes } from 'react';

const Todo = props => {
  const { text } = props;
  return (
    <div>
      {text}
    </div>
  );
};

Todo.propTypes = {
  key: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired
};

export default Todo;
