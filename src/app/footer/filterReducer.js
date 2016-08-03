import { APPLY_FILTER } from './footerActions';
import { ALL } from './filterTypes';

const initialFilter = ALL;

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;