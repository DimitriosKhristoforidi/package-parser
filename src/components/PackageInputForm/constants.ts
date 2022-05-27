import { IPackageFormInputs } from './PackageInputFormTypes';

export const packageFormInputs: IPackageFormInputs = {
  dependencies: {
    name: 'dependencies',
    placeholder: 'Insert dependencies json. Example: { "react": "^17.0.2" }',
    testId: 'packageInput',
  },
};

export const packageFormSubmitButton = {
  label: 'Find',
  testId: 'packageFormSubmitButton',
};
