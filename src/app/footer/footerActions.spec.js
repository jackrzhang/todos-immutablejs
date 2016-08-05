import { expect } from 'chai';
import {
  CLEAR_COMPLETED,
  clearCompleted,
  APPLY_FILTER,
  applyFilter
} from './footerActions';

const DUMMY_FILTER = 'DUMMY_FILTER';

describe('Footer Actions', () => {
  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    expect(clearCompleted()).to.deep.equal({
      type: CLEAR_COMPLETED
    });
  });

  it('applyFilter should create APPLY_FILTER action', () => {
    expect(applyFilter(DUMMY_FILTER)).to.deep.equal({
      type: APPLY_FILTER,
      filter: DUMMY_FILTER
    });
  });
});
