import {
  getCharacterAction,
  getCharactersListAction,
  startLoadingAction,
  stopLoadingAction,
} from '@actions/character';
import {Character, CharacterList} from '@models/character';
import {Dispatch} from 'redux';

import requests from '.';

export function getCharacter(id: number) {
  return function (dispatch: Dispatch) {
    dispatch(startLoadingAction());
    requests.get<Character>(`/character/${id}`).then(res => {
      setTimeout(() => {
        const created = new Date(res.created).toLocaleDateString('en-US');
        dispatch(getCharacterAction({...res, created}));
      }, 2000);
      setTimeout(() => dispatch(stopLoadingAction()), 2000);
    });
  };
}

export function getCharacterList(page = 1) {
  return function (dispatch: Dispatch) {
    dispatch(startLoadingAction());
    requests
      .get<CharacterList>(`/character/?page=${page}`)
      .then(({results}) => {
        setTimeout(() => {
          const characters = results.map(c => ({
            ...c,
            created: new Date(c.created).toLocaleDateString('en-US'),
          }));
          dispatch(getCharactersListAction(characters, page + 1));
        }, 2000);
        setTimeout(() => dispatch(stopLoadingAction()), 2000);
      });
  };
}
