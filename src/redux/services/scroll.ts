import {
  scrollCharactersAction,
  scrollEpisodesAction,
  scrollLocationsAction,
} from "@actions/scroll";
import ScrollAction from "@models/actions/scroll";
import { Dispatch } from "react";

export function scrollCharacters(offset: number) {
  return function (dispatch: Dispatch<ScrollAction>) {
    dispatch(scrollCharactersAction(offset));
  };
}

export function scrollLocations(offset: number) {
  return function (dispatch: Dispatch<ScrollAction>) {
    dispatch(scrollLocationsAction(offset));
  };
}

export function scrollEpisodes(offset: number) {
  return function (dispatch: Dispatch<ScrollAction>) {
    dispatch(scrollEpisodesAction(offset));
  };
}
