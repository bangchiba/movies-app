import { createReducer, createAction } from '@reduxjs/toolkit';
import { InitialStateProps } from './type';

export const initialState: InitialStateProps = { search: ''};

const SEARCH = 'SEARCH';

export const getSearch: ( state: any) => InitialStateProps = (state: any) => state.search;

export const setSearch = createAction(
  SEARCH,
  (payload: InitialStateProps) => {
    return {
      payload: payload
    };
  }
)

export default createReducer(initialState, {
  [SEARCH]: (state, action) => {
    state.search = action.payload;
  },
});