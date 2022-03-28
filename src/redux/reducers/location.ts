import LocationSlice from '@models/slices/location';
import LocationState from '@models/state/location';
import {createSlice} from '@reduxjs/toolkit';

const initialState: LocationState = {
  locations: [],
  isLoading: false,
};

const locationSlice = createSlice<LocationState, LocationSlice>({
  name: 'location',
  initialState,
  reducers: {
    getLocations(state, action) {
      state.locations = [...state.locations, ...action.payload];
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoding(state) {
      state.isLoading = false;
    },
  },
});

export const actions = locationSlice.actions;
export default locationSlice.reducer;
