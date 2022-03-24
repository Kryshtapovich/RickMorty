import CharacterAction, {CharacterActionType} from '@models/actions/character';
import {Character} from '@models/character';

export function getCharacterAction(character: Character): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTER,
    payload: {character},
  };
}

export function getCharactersListAction(
  characters: Array<Character>,
  nextPage = 1,
): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTER_LIST,
    payload: {nextPage, characters},
  };
}

export function setScrollPositionAction(
  scrollPosition: number,
): CharacterAction {
  return {
    type: CharacterActionType.SCROLLING,
    payload: {scrollPosition},
  };
}
