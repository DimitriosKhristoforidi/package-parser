import { UPDATE_PACKAGE, SET_LOADING } from './actionTypes';
import { TReducer, TState } from './storeTypes';

export const initialState: TState = {
  packagesList: [],
  loading: false,
};

export const packageReducer: TReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PACKAGE:
      return { ...state, packagesList: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
