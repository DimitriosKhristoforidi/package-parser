import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPackagesData, validatePackagesTerm } from './utils';

export const fetchPackages = createAsyncThunk(
  'packages/fetchPackages',
  async (packagesTerm: string) => {
    await validatePackagesTerm(packagesTerm);
    const packagesNamesList = Object.keys(JSON.parse(packagesTerm));
    return await getPackagesData(packagesNamesList);
  },
);
