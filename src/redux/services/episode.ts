import { GetEpisodeListAction } from "@actions/episode";
import { startLoadingAction, stopLoadingAction } from "@actions/loading";
import EpisodeAction from "@models/actions/episode";
import Episode from "@models/episode";
import { Pagination, ResultList } from "@models/pagination";
import { Dispatch } from "redux";

import requests, { fixDate } from ".";

export function getEpisodes(page = 1) {
  return async function (
    dispatch: Dispatch<EpisodeAction>,
  ): Promise<Pagination> {
    dispatch(startLoadingAction());

    const { info, results } = await requests.get<ResultList<Episode>>(
      `/episode?page=${page}`,
    );

    setTimeout(() => {
      const episodes = results.map(fixDate);
      dispatch(GetEpisodeListAction(episodes));
    }, 2000);

    setTimeout(() => dispatch(stopLoadingAction()), 2000);

    return { nextPage: page + 1, hasMore: info.next !== null };
  };
}
