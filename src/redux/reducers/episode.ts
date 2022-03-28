import EpisodeSlice from '@models/slices/episode';
import EpisodeState from '@models/state/episode';
import {createSlice} from '@reduxjs/toolkit';

const initialState: EpisodeState = {
  episodes: [],
  isLoading: false,
};

const episodeSlice = createSlice<EpisodeState, EpisodeSlice>({
  name: 'episode',
  initialState,
  reducers: {
    getEpisodes(state, action) {
      state.episodes = [...state.episodes, ...action.payload];
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export const actions = episodeSlice.actions;
export default episodeSlice.reducer;
