import { useMemo } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

let store;

const initStore = (initialState) => createStore(
  reducers,
  initialState,
  composeWithDevTools(),
);

export const initializeStore = (preloadedState) => {
  let currentStore = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    currentStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return currentStore;
  if (!store) store = currentStore;

  return currentStore;
};

export const useStore = (initialState) => {
  const currentStore = useMemo(() => initializeStore(initialState), [initialState]);
  return currentStore;
};
