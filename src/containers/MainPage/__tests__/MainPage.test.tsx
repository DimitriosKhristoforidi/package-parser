import React from 'react';
import { screen } from '@testing-library/react';
import MainPage from '../MainPage';
import { beforeEachTest } from '../../../utils/testsUtils';
import { render } from '../../../utils/testRender';
import { mainHeading } from '../constants';

describe('Main Page', () => {
  beforeEach(beforeEachTest);

  const renderMainPage = () => render(<MainPage />);

  it('Should: Render heading with correct text', () => {
    renderMainPage();
    const heading = screen.getByText(mainHeading);
    expect(heading.tagName.toLowerCase()).toBe('h2');
    expect(heading.innerHTML).toBe(mainHeading);
  });
});
