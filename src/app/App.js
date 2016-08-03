import React, { Component } from 'react';

import 'normalize.css';
import styles from './App.css';

import Input from './input/Input.container';
import Todos from './todos/Todos.container';

// react-hot-loader prior to version 3 does not
// support stateless functional root components
class App extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>todos</h1>
        <div className={styles.list}>
          <Input />
          <Todos />
        </div>
        <h6 className={styles.credit}>made with &#9825; by&nbsp;
          <a target="_blank" href="https://github.com/jackrzhang">jackrzhang</a>
        </h6>
      </div>
    );
  }
}

export default App;
