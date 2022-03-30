import EpisodeCard from '@components/cards/episode';
import InfiniteScroll from '@components/infiniteScroll';
import {useScroll} from '@context/scroll';
import Episode from '@models/episode';
import {GetEpisodesQuery} from '@services/episode';
import React from 'react';
import {ListRenderItemInfo} from 'react-native';

function EpisodesScreen() {
  const {episode} = useScroll();

  return (
    <InfiniteScroll
      offset={episode.offset}
      query={GetEpisodesQuery}
      onScroll={episode.scroll}
      numColumns={{portrait: 1, landscape: 2}}
      renderItem={({item}: ListRenderItemInfo<Episode>) => (
        <EpisodeCard episode={item} />
      )}
    />
  );
}

export default EpisodesScreen;
