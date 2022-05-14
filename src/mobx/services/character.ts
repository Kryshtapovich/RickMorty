import { map } from "bluebird";

import { Character, ReducedCharacter, ResultList } from "@mobx/models";

import { getPagedData, requests } from ".";

export async function getCharactersByName(name: string, page: number) {
  const result = await requests.get<ResultList<Character>>(`/character/?name=${name}&page=${page}`);
  return getPagedData(page, result);
}

export async function getCharacters(page = 1) {
  const result = await requests.get<ResultList<Character>>(`/character/?page=${page}`);
  return getPagedData(page, result);
}

export function getCharactersByUrls(urls: Array<string>) {
  return map(urls, (url) => requests.get<ReducedCharacter>(url));
}
