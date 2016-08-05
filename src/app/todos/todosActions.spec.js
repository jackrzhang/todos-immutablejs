import { expect } from 'chai';
import {
  COMPLETE_TODO,
  completeTodo
} from './todosActions';

describe('Todos Actions', () => {
  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    expect(completeTodo(7)).to.deep.equal({
      type: COMPLETE_TODO,
      id: 7
    });
  });
});
