import {getEpisodesRequestAction} from '@actions/episode';
import {scrollEpisodesAction} from '@actions/scroll';
import EpisodeCard from '@components/cards/episode';
import InfiniteScroll from '@components/infiniteScroll';
import {useDispatch, useSelector} from '@store';
import React from 'react';

function EpisodesScreen() {
  const dispatch = useDispatch();

  const state = useSelector(({episodeReducer}) => episodeReducer);
  const {episodes, isLoading, pagination} = state;

  const offset = useSelector(({scrollReducer}) => scrollReducer.episodeOffset);

  return (
    <InfiniteScroll
      offset={offset}
      data={episodes}
      isLoading={isLoading}
      pagination={pagination}
      numColumns={{portrait: 1, landscape: 2}}
      load={page => dispatch(getEpisodesRequestAction(page))}
      onScroll={offset => dispatch(scrollEpisodesAction(offset))}
      renderItem={({item}) => <EpisodeCard episode={item} />}
    />
  );
}

export default EpisodesScreen;
