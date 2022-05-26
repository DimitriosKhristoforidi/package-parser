import { IPackageFormInputs } from './PackageInputTypes';

export const packageFormInputs: IPackageFormInputs = {
  dependencies: {
    name: 'dependencies',
    placeholder: 'Insert dependencies json. Example: { "react": "^17.0.2" }',
  },
};

export const packageFormSubmitButton = {
  label: 'Find',
};
