import EpisodeCard from "@components/cards/episode";
import Spinner from "@components/spinner";
import Store from "@models/store";
import { getEpisodes } from "@services/episode";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function EpisodesScreen() {
  const dispatch = useDispatch();

  const episodes = useSelector(
    ({episodeReducer}: Store) => episodeReducer.episodes,
  );

  const nextPage = useSelector(
    ({episodeReducer}: Store) => episodeReducer.nextPage,
  );

  const isLoading = useSelector(
    ({episodeReducer}: Store) => episodeReducer.isLoading,
  );

  const endReached = () => {
    !isLoading && dispatch(getEpisodes(nextPage));
  };

  useEffect(() => {
    !episodes.length && dispatch(getEpisodes());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={episodes}
        style={styles.list}
        scrollEventThrottle={16}
        onEndReached={endReached}
        keyExtractor={(_, i) => i.toString()}
        ListFooterComponent={isLoading ? <Spinner /> : null}
        renderItem={({item}) => <EpisodeCard episode={item} />}
      />
    </SafeAreaView>
  );
}

export default EpisodesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
