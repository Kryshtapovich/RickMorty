import Character from '@models/character';
import {Pagination, ResultList} from '@models/pagination';
import {actions} from '@reducers/character';
import {Dispatch} from 'redux';

import requests, {fixDate} from '.';

export const getCharacter = (id: number) => async (dispatch: Dispatch) => {
  const character = await requests
    .get<Character>(`character/${id}`)
    .then(fixDate);

  dispatch(actions.getCharacter(character));
};

export const getCharacterList =
  (page = 1) =>
  async (dispatch: Dispatch): Promise<Pagination> => {
    dispatch(actions.startLoading());

    const {info, results} = await requests.get<ResultList<Character>>(
      `/character/?page=${page}`,
    );

    const characters = results.map(fixDate);

    dispatch(actions.getCharacterList(characters));

    dispatch(actions.stopLoading());

    return {nextPage: page + 1, hasMore: info.next !== null};
  };
