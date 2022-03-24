import * as Actions from "@actions/character";
import { startLoadingAction, stopLoadingAction } from "@actions/loading";
import CharacterAction from "@models/actions/character";
import { Character, CharacterList } from "@models/character";
import { Dispatch } from "redux";

import requests, { fixDate } from ".";

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
  return function (dispatch: Dispatch<CharacterAction>) {
    dispatch(startLoadingAction());
    requests
      .get<CharacterList>(`/character/?page=${page}`)
      .then(({results}) => {
        setTimeout(() => {
          const characters = results.map(fixDate);
          dispatch(Actions.getCharactersListAction(characters, page + 1));
        }, 2000);
        setTimeout(() => dispatch(stopLoadingAction()), 2000);
      });
  };
}

export function setScrollPosition(position: number) {
  return function (dispatch: Dispatch<CharacterAction>) {
    dispatch(Actions.setScrollPositionAction(position));
  };
}
