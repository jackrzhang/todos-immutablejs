/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import todosReducer, { initialTodos } from './todosReducer';

import { ADD_TODO } from './../app/input/inputActions';
import { COMPLETE_TODO } from './../app/todos/todosActions';
import { CLEAR_COMPLETED } from './../app/footer/footerActions';

import Immutable, { Map, List } from 'immutable';

describe('Todos Reducer', () => {
  it('should handle initial state', () => {
    expect(
      todosReducer(undefined, {})
    ).to.equal(initialTodos);
  });

  it('should handle ADD_TODO', () => {
    expect(Immutable.is(
      todosReducer(List([]), {
        type: ADD_TODO,
        text: 'Buy milk'
      }),
      List([
        Map({
          id: 0,
          text: 'Buy milk',
          complete: false
        })
      ])
    )).to.be.true;

    expect(Immutable.is(
      todosReducer(List([
        Map({
          id: 0,
          text: 'Buy milk',
          complete: true
        })
      ]), {
        type: ADD_TODO,
        text: 'Buy eggs'
      }),
      List([
        Map({
          id: 0,
          text: 'Buy milk',
          complete: true
        }),
        Map({
          id: 1,
          text: 'Buy eggs',
          complete: false
        })
      ])
    )).to.be.true;
  });

  it('should handle COMPLETE_TODO', () => {
    expect(Immutable.is(
      todosReducer(List([
        Map({
          id: 0,
          text: 'Buy milk',
          complete: false
        })
      ]), {
        type: COMPLETE_TODO,
        id: 0
      }),
      List([
        Map({
          id: 0,
          text: 'Buy milk',
          complete: true
        })
      ])
    )).to.be.true;

    expect(Immutable.is(
      todosReducer(List([
        Map({
          id: 0,
          text: 'Buy milk',
          complete: true
        })
      ]), {
        type: COMPLETE_TODO,
        id: 0
      }),
      List([
        Map({
          id: 0,
          text: 'Buy milk',
          complete: false
        })
      ])
    )).to.be.true;
  });

  it('should handle CLEAR_COMPLETED', () => {
    expect(Immutable.is(
      todosReducer(List([
        Map({
          id: 0,
          text: 'Buy milk',
          complete: true
        }),
        Map({
          id: 1,
          text: 'Buy eggs',
          complete: false
        }),
        Map({
          id: 1,
          text: 'Buy apples',
          complete: true
        })
      ]), {
        type: CLEAR_COMPLETED
      }),
      List([
        Map({
          id: 1,
          text: 'Buy eggs',
          complete: false
        })
      ])
    )).to.be.true;
  });
});

