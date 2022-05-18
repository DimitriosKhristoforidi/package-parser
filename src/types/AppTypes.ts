import React from 'react';
import { TState } from '../store/storeTypes';

export interface IAppContext {
  dispatch: React.Dispatch<any>;
  state: TState;
}

export interface IPackage {
  name: string;
  description: string;
  keywords: string[];
  links: string;
}
