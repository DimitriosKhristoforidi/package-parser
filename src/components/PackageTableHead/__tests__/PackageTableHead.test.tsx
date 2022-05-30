import React from 'react';
import { renderWithRedux } from '../../../utils/testUtils';
import PackageTableHead from '../PackageTableHead';

describe('Package Table Head', () => {
  it('Should match snapshot', () => {
    const wrapper = renderWithRedux(<PackageTableHead />);

    expect(wrapper).toMatchSnapshot();
  });
});
