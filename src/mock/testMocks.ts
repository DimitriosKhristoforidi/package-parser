import { RootState } from '../app/types';

export const packagesListMock = [
  {
    name: 'react',
    description: 'React is a JavaScript library for building user interfaces.',
    keywords: ['react'],
    links: {
      npm: 'https://www.npmjs.com/package/react',
    },
  },
];

export const initialStateMock: RootState = {
  packages: {
    loading: false,
    packagesList: [],
  },
};
