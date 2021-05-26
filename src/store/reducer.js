import React from 'react';

export const ContextApp = React.createContext();

export const initialState = {
  packageList: [],
  loading: false,
};

export const packageReducer = (state, action) => {
  switch (action.type) {
    case 'updatePackage':
      return { ...state, packageList: action.payload };
    case 'clearPackage':
      return initialState;
    case 'setLoading':
      return {...state, loading: action.payload};
    default:
      return state;
  }
};
