import { expect } from 'chai';
import {
  ADD_TODO,
  addTodo
} from './inputActions';

describe('Input Actions', () => {
  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    expect(addTodo('Buy eggs and milk')).to.deep.equal({
      type: ADD_TODO,
      text: 'Buy eggs and milk'
    });
  });
});
