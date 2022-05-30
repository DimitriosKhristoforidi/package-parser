import { configureStore } from '@reduxjs/toolkit';
import packageReducer from '../features/packages/packagesSlice';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import React, { ReactElement } from 'react';

type TRenderWithRedux = (component: ReactElement) => RenderResult;

export const renderWithRedux: TRenderWithRedux = (component) => {
  const store = configureStore({
    reducer: {
      packages: packageReducer,
    },
  });

  return render(<Provider store={store}>{component}</Provider>);
};
