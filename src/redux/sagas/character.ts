import {getCharacterAction, getCharactersListAction} from '@actions/character';
import {startLoadingAction, stopLoadingAction} from '@actions/loading';
import CharacterAction, * as Actions from '@models/actions/character';
import Character from '@models/character';
import {PagedList} from '@models/pagination';
import {getCharacter, getCharacterList} from '@services/character';
import * as Saga from 'redux-saga/effects';

function* getCharacterSaga({
  payload,
}: Actions.GetCharacterRequestAction): Generator<
  Saga.CallEffect<Character> | Saga.PutEffect<CharacterAction>,
  void,
  Character
> {
  const {characterId} = payload;
  yield Saga.put(startLoadingAction());
  const character = yield Saga.call(getCharacter, characterId);
  yield Saga.put(getCharacterAction(character));
  yield Saga.put(stopLoadingAction());
}

function* getCharacterListSaga({
  payload,
}: Actions.GetCharacterListRequestAction): Generator<
  Saga.CallEffect<PagedList<Character>> | Saga.PutEffect<CharacterAction>,
  void,
  PagedList<Character>
> {
  const {page} = payload;
  yield Saga.put(startLoadingAction());
  const result = yield Saga.call(getCharacterList, page);
  yield Saga.put(getCharactersListAction(result));
  yield Saga.put(stopLoadingAction());
}

function* characterSaga() {
  yield Saga.all([
    Saga.takeEvery(
      Actions.CharacterActionType.GET_CHARACTER_REQUEST,
      getCharacterSaga,
    ),
    Saga.takeEvery(
      Actions.CharacterActionType.GET_CHARACTER_LIST_REQUEST,
      getCharacterListSaga,
    ),
  ]);
}

export default characterSaga;
