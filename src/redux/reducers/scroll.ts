import ScrollSlice from '@models/slices/scroll';
import ScrollState from '@models/state/scroll';
import {createSlice} from '@reduxjs/toolkit';

const initialState: ScrollState = {
  characterOffset: 0,
  locationOffset: 0,
  episodeOffset: 0,
};

const scrollSlice = createSlice<ScrollState, ScrollSlice>({
  name: 'scroll',
  initialState,
  reducers: {
    scrollCharacters(state, action) {
      state.characterOffset = action.payload;
    },
    scrollLocations(state, action) {
      state.locationOffset = action.payload;
    },
    scrollEpisodes(state, action) {
      state.episodeOffset = action.payload;
    },
  },
});

export const actions = scrollSlice.actions;
export default scrollSlice.reducer;
