import { combineReducers } from 'redux-immutable';
import filterReducer from './filterReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  todos: todosReducer
});

export default rootReducer;
