import React from 'react';
import { screen } from '@testing-library/react';
import PackageInputForm from '../PackageInputForm';
import { beforeEachTest } from '../../../utils/testsUtils';
import { render } from '../../../utils/testRender';
import { packageFormSubmitButton } from '../constants';

describe('Package Input Form', () => {
  beforeEach(beforeEachTest);

  const renderPackageInputForm = () => render(<PackageInputForm />);

  it('Should: Render button', () => {
    renderPackageInputForm();
    const submitButton = screen.getByTestId(packageFormSubmitButton.testId);
    expect(submitButton.tagName.toLowerCase()).toBe('button');
  });
});
