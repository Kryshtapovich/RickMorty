import Character from '@models/character';
import CharacterSlice from '@models/slices/character';
import CharacterState from '@models/state/character';
import {createSlice} from '@reduxjs/toolkit';

const initialState: CharacterState = {
  isLoading: false,
  characterList: [],
  character: {} as Character,
};

const characterSlice = createSlice<CharacterState, CharacterSlice>({
  name: 'character',
  initialState,
  reducers: {
    getCharacter(state, action) {
      state.character = action.payload;
    },
    getCharacterList(state, action) {
      state.characterList = [...state.characterList, ...action.payload];
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export const actions = characterSlice.actions;
export default characterSlice.reducer;
