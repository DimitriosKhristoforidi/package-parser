import React, { useReducer } from 'react';
import {ContextApp, initialState, packageReducer} from "./store/reducer.js";
import MainPage from './containers/MainPage';

export default function App() {
  const [state, dispatch] = useReducer(packageReducer, initialState);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <MainPage />
    </ContextApp.Provider>
  );
}
