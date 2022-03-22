import { CharacterState } from "./state";

export default interface Store {
  characterReducer: CharacterState;
}
