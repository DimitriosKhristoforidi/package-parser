import React, { useReducer } from 'react';
import { initialState, packageReducer } from './store/reducer';
import MainPage from './containers/MainPage';
import { IAppContext } from './types/AppTypes';

export const ContextApp: React.Context<IAppContext> = React.createContext({
  dispatch: (value) => {},
  state: initialState,
});

const App: React.FC = () => {
  const [state, dispatch] = useReducer(packageReducer, initialState);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <MainPage />
    </ContextApp.Provider>
  );
};

export default App;
