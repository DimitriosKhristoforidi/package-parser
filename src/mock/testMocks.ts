import { RootState } from '../app/types';
import { initialState } from '../features/packages/packagesSlice';

export const packagesListMock = [
  {
    name: 'react',
    description: 'React is a JavaScript library for building user interfaces.',
    keywords: [
      'react',
      'react',
      'react',
      'react',
      'react',
      'react',
      'react',
      'react',
      'react',
      'react',
      'react',
      'react',
      'react',
    ],
    links: {
      npm: 'https://www.npmjs.com/package/react',
    },
  },
  {
    name: 'react',
    description:
      'React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.',
    keywords: ['react', 'react', 'react', 'react'],
    links: {
      npm: 'https://www.npmjs.com/package/react',
    },
  },
  {
    name: 'react_react_react_react_react_react',
    description: 'React is a JavaScript library for building user interfaces.',
    keywords: ['react', 'react', 'react', 'react'],
    links: {
      npm: 'https://www.npmjs.com/package/react',
    },
  },
];

export const initialStateMock: RootState = {
  packages: initialState,
};
