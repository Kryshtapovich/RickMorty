import Character from "../character";
import LoadingAction from "./loading";

export const enum CharacterActionType {
  GET_CHARACTER = "GET_CHARACTER",
  GET_CHARACTER_LIST = "GET_CHARACTER_LIST",
}

interface GetCharacterAction {
  type: CharacterActionType.GET_CHARACTER;
  payload: {
    character: Character;
  };
}

interface GetCharacterListAction {
  type: CharacterActionType.GET_CHARACTER_LIST;
  payload: { characters: Array<Character> };
}

type CharacterAction =
  | GetCharacterAction
  | GetCharacterListAction
  | LoadingAction;

export default CharacterAction;
