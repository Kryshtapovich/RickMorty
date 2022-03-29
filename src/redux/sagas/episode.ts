import {getEpisodesAction} from '@actions/episode';
import {startLoadingAction, stopLoadingAction} from '@actions/loading';
import EpisodeAction, * as Actions from '@models/actions/episode';
import Episode from '@models/episode';
import {PagedList} from '@models/pagination';
import {getEpisodes} from '@services/episode';
import * as Saga from 'redux-saga/effects';

function* getEpisodesSaga({
  payload,
}: Actions.GetEpisodesActionRequest): Generator<
  Saga.CallEffect<PagedList<Episode>> | Saga.PutEffect<EpisodeAction>,
  void,
  PagedList<Episode>
> {
  const {page} = payload;
  yield Saga.put(startLoadingAction());
  const result = yield Saga.call(getEpisodes, page);
  yield Saga.put(getEpisodesAction(result));
  yield Saga.put(stopLoadingAction());
}

function* episodeSaga() {
  yield Saga.all([
    Saga.takeEvery(
      Actions.EpisodeActionType.GET_EPISODES_REQUEST,
      getEpisodesSaga,
    ),
  ]);
}

export default episodeSaga;
