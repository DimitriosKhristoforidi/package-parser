import React from 'react';
import MainPage from './containers/MainPage';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container fixed>
        <MainPage />
      </Container>
    </Provider>
  );
};

export default App;
