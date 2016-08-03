export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});

export const APPLY_FILTER = 'APPLY_FILTER';

export const applyFilter = filter => ({
  type: APPLY_FILTER,
  filter
});
