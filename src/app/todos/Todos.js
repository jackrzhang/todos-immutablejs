import React, { Component } from 'react';

import styles from './Todos.css';

// react-hot-loader prior to version 3 does not
// support stateless functional root components
class Todos extends Component {
  render() {
    return (
      <div>
        Hey
      </div>
    );
  }
}

export default Todos;

// import { connect } from 'react-redux';

// export default connect(
//   () => ({})
// )(Todos);
