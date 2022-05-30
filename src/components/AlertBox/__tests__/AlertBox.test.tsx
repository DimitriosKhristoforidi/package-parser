import React from 'react';
import { renderWithRedux } from '../../../utils/testUtils';
import AlertBox from '../AlertBox';

describe('Alert Box', () => {
  it('Should match snapshot', () => {
    const wrapper = renderWithRedux(<AlertBox content='Content' />);

    expect(wrapper).toMatchSnapshot();
  });
});
