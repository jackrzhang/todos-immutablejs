import React, { Component } from 'react';
import styles from './App.css';

// react-hot-loader prior to version 3 does not
// support stateless functional root components
class App extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>todos</h1>
        Asdfasdfasd
      </div>
    );
  }
}

export default App;
