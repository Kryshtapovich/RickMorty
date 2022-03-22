import {Character, CharacterList} from '@models/character';
import {getCharacterAction, getCharactersListAction} from '@actions/character';

import {Dispatch} from 'redux';
import requests from './index';

export function getCharacter(id: number) {
  return function (dispatch: Dispatch) {
    requests.get<Character>(`/character/${id}`).then(res => {
      dispatch(getCharacterAction(res));
      return res;
    });
  };
}

export function getAllCharacters() {
  return function (dispatch: Dispatch) {
    requests.get<CharacterList>('/character').then(res => {
      dispatch(getCharactersListAction(res.results));
      return res.results;
    });
  };
}
