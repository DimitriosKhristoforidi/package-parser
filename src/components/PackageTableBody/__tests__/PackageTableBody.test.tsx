import React from 'react';
import { renderWithRedux } from '../../../utils/testUtils';
import PackageTableBody from '../PackageTableBody';
import { packagesListMock } from '../../../mock/testMocks';

describe('Package Table Body', () => {
  it('Should match snapshot', () => {
    const wrapper = renderWithRedux(
      <PackageTableBody packagesList={packagesListMock} />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
