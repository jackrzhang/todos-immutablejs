import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware()
  );

  return store;
}
