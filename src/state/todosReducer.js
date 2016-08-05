import { Map, List } from 'immutable';

import { ADD_TODO } from './../app/input/inputActions';
import { COMPLETE_TODO } from './../app/todos/todosActions';
import { CLEAR_COMPLETED } from './../app/footer/footerActions';

export const initialTodos = List([
  Map({
    id: 0,
    text: 'Learn React & Redux',
    complete: false
  }), Map({
    id: 1,
    text: "Utilize Webpack's Hot Module Reloading",
    complete: false
  }), Map({
    id: 2,
    text: 'Set up Redux DevTools',
    complete: false
  }), Map({
    id: 3,
    text: 'Optimize using immutability :)',
    complete: false
  })
]);

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.push(Map({
        id: state.reduce((maxId, todo) => Math.max(todo.get('id'), maxId), -1) + 1,
        text: action.text,
        complete: false
      }));
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.get('id') === action.id ?
          todo.set('complete', !todo.get('complete')) :
          todo
      );
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.get('complete'));
    default:
      return state;
  }
};

export default todosReducer;
