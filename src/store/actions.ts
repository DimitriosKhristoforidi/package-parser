import { UPDATE_PACKAGE, SET_LOADING } from './actionTypes';
import { TActionCreator } from './storeTypes';

export const updatePackage: TActionCreator = (payload) => ({
  type: UPDATE_PACKAGE,
  payload,
});

export const setLoading: TActionCreator = (payload) => ({
  type: SET_LOADING,
  payload,
});
