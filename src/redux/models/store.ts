import { CharacterState, ScrollState } from "./state";

export default interface Store {
  characterReducer: CharacterState;
  scrollReducer: ScrollState;
}
