import React from 'react';
import { renderWithRedux } from '../../../utils/testUtils';
import PackagesTable from '../PackagesTable';

describe('Packages Table', () => {
  it('Should match snapshot', () => {
    const wrapper = renderWithRedux(<PackagesTable />);

    expect(wrapper).toMatchSnapshot();
  });
});
