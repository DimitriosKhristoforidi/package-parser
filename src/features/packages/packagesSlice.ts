import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPackage, IPackagesState } from './packagesSliceTypes';
import { fetchPackages } from './packageSliceAsync';

export const initialState: IPackagesState = {
  packagesList: [],
  loading: false,
  alertMessage: '',
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
    clearAlertMessage: (state) => {
      state.alertMessage = '';
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
      state.alertMessage = action.error.message;
      state.loading = false;
    });
  },
});

const { reducer, actions } = packagesSlice;

export const { clearAlertMessage } = actions;
export default reducer;
