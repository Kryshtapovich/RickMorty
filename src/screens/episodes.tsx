import EpisodeCard from "@components/cards/episode";
import InfiniteScroll from "@components/infiniteScroll";
import { getEpisodes } from "@services/episode";
import { scrollEpisodes } from "@services/scroll";
import { useDispatch, useSelector } from "@store";
import React from "react";

function EpisodesScreen() {
  const dispatch = useDispatch();

  const state = useSelector(({ episodeReducer }) => episodeReducer);
  const { episodes, isLoading } = state;

  const offset = useSelector(
    ({ scrollReducer }) => scrollReducer.episodeOffset,
  );

  return (
    <InfiniteScroll
      offset={offset}
      data={episodes}
      isLoading={isLoading}
      numColumns={{ portrait: 1, landscape: 2 }}
      load={page => dispatch(getEpisodes(page))}
      onScroll={offset => dispatch(scrollEpisodes(offset))}
      renderItem={({ item }) => <EpisodeCard episode={item} />}
    />
  );
}

export default EpisodesScreen;
