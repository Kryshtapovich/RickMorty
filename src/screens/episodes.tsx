import EpisodeCard from '@components/cards/episode';
import InfiniteScroll from '@components/infiniteScroll';
import {useStore} from '@stores';
import {observer} from 'mobx-react-lite';
import React from 'react';

function EpisodesScreen() {
  const {episodeStore, scrollStore} = useStore();
  const {episodes, isLoading} = episodeStore;

  const {episodeOffset} = scrollStore;

  return (
    <InfiniteScroll
      data={episodes}
      isLoading={isLoading}
      offset={episodeOffset}
      load={episodeStore.getEpisodes}
      onScroll={scrollStore.scrollEpisodes}
      numColumns={{portrait: 1, landscape: 2}}
      renderItem={({item}) => <EpisodeCard episode={item} />}
    />
  );
}

export default observer(EpisodesScreen);
