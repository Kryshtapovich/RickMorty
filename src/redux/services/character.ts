import * as Actions from '@actions/character';
import {startLoadingAction, stopLoadingAction} from '@actions/loading';
import CharacterAction from '@models/actions/character';
import Character from '@models/character';
import {Pagination, ResultList} from '@models/pagination';
import {Dispatch} from 'redux';

import requests, {fixDate} from '.';

export function getCharacter(id: number) {
  return function (dispatch: Dispatch<CharacterAction>) {
    dispatch(startLoadingAction());
    requests.get<Character>(`/character/${id}`).then(res => {
      setTimeout(() => {
        const character = fixDate(res);
        dispatch(Actions.getCharacterAction(character));
      }, 2000);
      setTimeout(() => dispatch(stopLoadingAction()), 2000);
    });
  };
}

export function getCharacterList(page = 1) {
  return async function (
    dispatch: Dispatch<CharacterAction>,
  ): Promise<Pagination> {
    dispatch(startLoadingAction());

    const {info, results} = await requests.get<ResultList<Character>>(
      `/character/?page=${page}`,
    );

    setTimeout(() => {
      const characters = results.map(fixDate);
      dispatch(Actions.getCharactersListAction(characters));
    }, 2000);

    setTimeout(() => dispatch(stopLoadingAction()), 2000);

    return {nextPage: page + 1, hasMore: info.next !== null};
  };
}

export function setScrollPosition(position: number) {
  return function (dispatch: Dispatch<CharacterAction>) {
    dispatch(Actions.setScrollPositionAction(position));
  };
}
