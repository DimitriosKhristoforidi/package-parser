import { RootState } from '../app/types';
import { initialState } from '../features/packages/packagesSlice';

export const packagesListMock = [
  {
    name: '@reduxjs/toolkit',
    description:
      'The official, opinionated, batteries-included toolset for efficient Redux development',
    maintainers: [
      {
        name: 'acemarke',
        email: 'mark.erikson@gmail.com',
      },
      {
        name: 'timdorr',
        email: 'timdorr@timdorr.com',
      },
      {
        name: 'gaearon',
        email: 'dan.abramov@gmail.com',
      },
      {
        name: 'phryneas',
        email: 'mail@lenzw.de',
      },
    ],
    homepage: 'https://redux-toolkit.js.org',
  },
];

export const initialStateMock: RootState = {
  packages: initialState,
};
