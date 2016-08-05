import { expect } from 'chai';
import filterReducer, { initialFilter } from './filterReducer';
import { APPLY_FILTER } from './../app/footer/footerActions';
import { ALL, ACTIVE, COMPLETED } from './filterTypes';

describe('Filter Reducer', () => {
  it('should handle initial state', () => {
    expect(
      filterReducer(undefined, {})
    ).to.equal(initialFilter);
  });

  it('should handle APPLY_FILTER', () => {
    expect(
      filterReducer(initialFilter, {
        type: APPLY_FILTER,
        filter: ALL
      })
    ).to.equal(ALL);

    expect(
      filterReducer(initialFilter, {
        type: APPLY_FILTER,
        filter: ACTIVE
      })
    ).to.equal(ACTIVE);

    expect(
      filterReducer(initialFilter, {
        type: APPLY_FILTER,
        filter: COMPLETED
      })
    ).to.equal(COMPLETED);
  });
});
