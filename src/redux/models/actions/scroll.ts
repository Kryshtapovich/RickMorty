import {PayloadAction} from '@reduxjs/toolkit';

export const enum ScrollActionType {
  SCROLL_CHARACTERS = 'SCROLL_CHARACTERS',
  SCROLL_LOCATIONS = 'SCROLL_LOCATIONS',
  SCROLL_EPISODES = 'SCROLL_EPISODES',
}

export type CharacterScrollAction = PayloadAction<
  number,
  ScrollActionType.SCROLL_CHARACTERS
>;

export type LocationScrollAction = PayloadAction<
  number,
  ScrollActionType.SCROLL_LOCATIONS
>;

export type EpisodeScrollAction = PayloadAction<
  number,
  ScrollActionType.SCROLL_EPISODES
>;

type ScrollAction =
  | CharacterScrollAction
  | LocationScrollAction
  | EpisodeScrollAction;

export default ScrollAction;
