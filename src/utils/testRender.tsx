import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import { RootState } from '../app/types';
import { Provider } from 'react-redux';
import { initialStateMock } from '../mock/testMocks';

export const beforeEachTest = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

interface ExtendedRenderOptions extends RenderOptions {
  initialState: Partial<RootState>;
  store?: Store<Partial<RootState>>;
}

const render = (
  component: React.ReactElement,
  {
    initialState,
    store = configureStore<Partial<RootState>>()(initialState),
    ...renderOptions
  }: ExtendedRenderOptions = {
    initialState: initialStateMock,
  },
) => {
  return rtlRender(component, {
    wrapper: TestWrapper(store),
    ...renderOptions,
  });
};

const TestWrapper =
  (store: Store) =>
  ({ children }: { children?: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };

export * from '@testing-library/react';
export { render };
