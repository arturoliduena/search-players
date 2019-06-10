import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const mockStore = configureMockStore([thunk]);

export const getAction = (store, type) => {
  const action = store.getActions().find(action => action.type === type);
  if (action) return Promise.resolve(action);

  return new Promise(resolve => {
    store.subscribe(() => {
      if (action) resolve(action);
    });
  });
};