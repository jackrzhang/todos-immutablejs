import { APPLY_FILTER } from './../app/footer/footerActions';
import { ALL } from './filterTypes';

export const initialFilter = ALL;

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
