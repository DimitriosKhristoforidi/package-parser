import React from 'react';
import { renderWithRedux } from '../../../utils/testUtils';
import PackageInputForm from '../PackageInputForm';

describe('Package Input Form', () => {
  it('Should match snapshot', () => {
    const wrapper = renderWithRedux(<PackageInputForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
