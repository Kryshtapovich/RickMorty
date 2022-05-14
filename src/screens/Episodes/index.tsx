import React from "react";

import { observer } from "mobx-react-lite";

import { InfiniteScroll, SafeAreaView } from "@components/atoms";
import { EpisodeCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { useStore } from "@mobx/stores";

export const EpisodesScreen = observer(() => {
  const { scrollStore, episodeStore } = useStore();
  const { episodeOffset, scrollEpisodes } = scrollStore;
  const { episodes, error, getEpisodes } = episodeStore;

  return (
    <SafeAreaView>
      <InfiniteScroll
        data={episodes}
        load={getEpisodes}
        offset={episodeOffset}
        onScroll={scrollEpisodes}
        numColumns={{ portrait: 1, landscape: 2 }}
        renderItem={({ item }) => <EpisodeCard episode={item} />}
      />
      <ErrorModal errorText={error} />
    </SafeAreaView>
  );
});
