import {actions} from '@reducers/scroll';
import {Dispatch} from 'redux';

export const scrollCharacters = (offset: number) => (dispatch: Dispatch) => {
  dispatch(actions.scrollCharacters(offset));
};

export const scrollLocations = (offset: number) => (dispatch: Dispatch) => {
  dispatch(actions.scrollLocations(offset));
};

export const scrollEpisodes = (offset: number) => (dispatch: Dispatch) => {
  dispatch(actions.scrollEpisodes(offset));
};
