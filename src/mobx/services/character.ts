import Character from '@models/character';
import {ResultList} from '@models/pagination';

import requests, {fixDate} from '.';

export function getCharacter(id: number) {
  return requests.get<Character>(`/character/${id}`).then(fixDate);
}

export async function getCharacterList(page: number) {
  const {info, results} = await requests.get<ResultList<Character>>(
    `/character/?page=${page}`,
  );

  return {
    pagination: {nextPage: page + 1, hasMore: info.next !== null},
    list: results.map(fixDate),
  };
}
