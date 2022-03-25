import EpisodeCard from '@components/cards/episode';
import InfiniteScroll from '@components/infiniteScroll';
import {getEpisodes} from '@services/episode';
import {useDispatch, useSelector} from '@store';
import React from 'react';

function EpisodesScreen() {
  const dispatch = useDispatch();

  const state = useSelector(({episodeReducer}) => episodeReducer);
  const {episodes, isLoading} = state;

  return (
    <InfiniteScroll
      data={episodes}
      isLoading={isLoading}
      load={page => dispatch(getEpisodes(page))}
      renderItem={({item}) => <EpisodeCard episode={item} />}
    />
  );
}

export default EpisodesScreen;
