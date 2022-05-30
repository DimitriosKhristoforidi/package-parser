import React from 'react';
import MainPage from '../MainPage';
import { renderWithRedux } from '../../../utils/testUtils';

describe('Main Page', () => {
  it('Should match snapshot', () => {
    const wrapper = renderWithRedux(<MainPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
