import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPackage, IPackagesState } from './packagesSliceTypes';
import { fetchPackages } from './packageSliceAsync';
import { Modal } from 'antd';

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
  extraReducers: (builder) => {
    builder.addCase(fetchPackages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPackages.fulfilled, (state, action) => {
      state.packagesList = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPackages.rejected, (state, action) => {
      Modal.error({ title: action.error.message });
      state.loading = false;
    });
  },
});

const { reducer } = packagesSlice;

export default reducer;
