import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPackage, IPackagesState } from './packagesSliceTypes';

const initialState: IPackagesState = {
  packagesList: [],
  loading: false,
};

export const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    updatePackage: (state, action: PayloadAction<IPackage[]>) => {
      state.packagesList = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = packagesSlice;

export const { updatePackage, setLoading } = actions;

export default reducer;
