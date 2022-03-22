import {getCharacterAction, getCharactersListAction} from '@actions/character';
import {Character, CharacterList} from '@models/character';
import {Dispatch} from 'redux';

import requests from '.';

export function getCharacter(id: number) {
  return function (dispatch: Dispatch) {
    requests.get<Character>(`/character/${id}`).then(res => {
      dispatch(getCharacterAction(res));
      return res;
    });
  };
}

export function getCharacterList(page = 1) {
  return function (dispatch: Dispatch) {
    requests.get<CharacterList>(`/character/?page=${page}`).then(res => {
      dispatch(getCharactersListAction(res.results, page + 1));
      return res.results;
    });
  };
}
