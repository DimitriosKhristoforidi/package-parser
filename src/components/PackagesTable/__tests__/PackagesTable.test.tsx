import React from 'react';
import { screen } from '@testing-library/react';
import PackagesTable from '../PackagesTable';
import { beforeEachTest } from '../../../utils/testsUtils';
import { render } from '../../../utils/testRender';
import { packagesListMock } from '../../../mock/testMocks';

describe('Packages Table', () => {
  beforeEach(beforeEachTest);

  const renderPackagesTable = () =>
    render(<PackagesTable />, {
      initialState: {
        packages: {
          loading: false,
          packagesList: packagesListMock,
        },
      },
    });

  it('Should: Render table headers', () => {
    renderPackagesTable();
    const tableHeading = screen.getByText('Title');
    expect(tableHeading.tagName.toLowerCase()).toBe('th');
  });

  it('Should: Render package line', () => {
    renderPackagesTable();
    const packageName = screen.getByText('react');
    expect(packageName.tagName.toLowerCase()).toBe('td');
  });
});
