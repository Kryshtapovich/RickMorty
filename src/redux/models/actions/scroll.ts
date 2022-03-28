export const enum ScrollActionType {
  SCROLL_CHARACTERS = 'SCROLL_CHARACTERS',
  SCROLL_LOCATIONS = 'SCROLL_LOCATIONS',
  SCROLL_EPISODES = 'SCROLL_EPISODES',
}

export interface CharacterScrollAction {
  type: ScrollActionType.SCROLL_CHARACTERS;
  payload: {offset: number};
}

export interface LocationScrollAction {
  type: ScrollActionType.SCROLL_LOCATIONS;
  payload: {offset: number};
}

export interface EpisodeScrollAction {
  type: ScrollActionType.SCROLL_EPISODES;
  payload: {offset: number};
}

type ScrollAction =
  | CharacterScrollAction
  | LocationScrollAction
  | EpisodeScrollAction;

export default ScrollAction;
