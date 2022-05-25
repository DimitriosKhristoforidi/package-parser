import React from 'react';
import MainPage from './containers/MainPage';
import { store } from './app/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
