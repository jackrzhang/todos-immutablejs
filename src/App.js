import React, { Component } from 'react';
import styles from './App.css';

// react-hot-loader prior to version 3 does not
// support stateless functional root components
class App extends Component {
  // Method declared for testing purposes
  componentDidMount() {}

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.title}>todos</h1>
      </div>
    );
  }
}

export default App;
