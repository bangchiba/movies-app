import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchDuck from './searchDuck';

const reducer = combineReducers({
  search: searchDuck,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export default store;