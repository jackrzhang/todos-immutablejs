import { ADD_TODO } from './../input/inputActions';
import { COMPLETE_TODO } from './../todos/todosActions';
import { CLEAR_COMPLETED } from './../footer/footerActions';

const initialTodos = [
  {
    id: 0,
    text: 'Learn React & Redux',
    complete: false
  }, {
    id: 1,
    text: "Utilize Webpack's Hot Module Reloading",
    complete: false
  }, {
    id: 2,
    text: 'Set up Redux DevTools',
    complete: false
  }, {
    id: 3,
    text: 'Optimize with Immutable.js :)',
    complete: false
  }
];

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text,
          complete: false
        },
        ...state
      ];
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { complete: !todo.complete }) :
          todo
      );
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.complete);
    default:
      return state;
  }
};

export default todosReducer;
