import FullCharacterCard from "@components/cards/fullCharacter";
import ReducedCharacterCard from "@components/cards/reducedCharacter";
import Spinner from "@components/spinner";
import useOrientation from "@hooks/useOrientation";
import Store from "@models/store";
import { getCharacter, getCharacterList, setScrollPosition } from "@services/character";
import React, { useEffect, useRef, useState } from "react";
import * as RN from "react-native";
import { useDispatch, useSelector } from "react-redux";

function CharactersScreen() {
  const [id, setId] = useState<number>();
  const dispatch = useDispatch();

  const character = useSelector(
    ({characterReducer}: Store) => characterReducer.character,
  );

  const characterList = useSelector(
    ({characterReducer}: Store) => characterReducer.characterList,
  );

  const nextPage = useSelector(
    ({characterReducer}: Store) => characterReducer.nextPage,
  );

  const isLoading = useSelector(
    ({characterReducer}: Store) => characterReducer.isLoading,
  );

  const offset = useSelector(
    ({characterReducer}: Store) => characterReducer.scrollPosition,
  );

  useEffect(() => {
    !characterList.length && dispatch(getCharacterList());
  }, []);

  const fetchCharacters = (id: number) => {
    setId(id);
    id && dispatch(getCharacter(id));
  };

  const {isPortrait} = useOrientation();

  const listRef = useRef<RN.FlatList>(null);

  useEffect(() => {
    listRef.current?.scrollToOffset({offset});
  }, [isPortrait]);

  const endReached = () => {
    !isLoading && dispatch(getCharacterList(nextPage));
  };

  const paddingBottom = RN.Platform.select({ios: 70, android: 115});

  const getData = () => {
    return id ? (
      isLoading ? (
        <Spinner />
      ) : (
        <FullCharacterCard character={character} />
      )
    ) : (
      <RN.FlatList
        ref={listRef}
        contentContainerStyle={{paddingBottom}}
        key={Number(isPortrait)}
        data={characterList}
        scrollEventThrottle={16}
        onScroll={({nativeEvent}) => {
          const position =
            nativeEvent.contentOffset.y * (isPortrait ? 0.5 : 2.4);
          dispatch(setScrollPosition(position));
        }}
        renderItem={({item}) => <ReducedCharacterCard character={item} />}
        keyExtractor={(_, i) => i.toString()}
        numColumns={isPortrait ? 2 : 4}
        onEndReached={endReached}
        ListFooterComponent={isLoading ? <Spinner /> : null}
      />
    );
  };

  return (
    <RN.SafeAreaView style={styles.container}>
      <RN.View style={styles.header}>
        <RN.TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={text => fetchCharacters(Number(text))}
        />
      </RN.View>
      <RN.View style={styles.content}>{getData()}</RN.View>
    </RN.SafeAreaView>
  );
}

export default CharactersScreen;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 15,
    borderRadius: 24,
    backgroundColor: 'gray',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
});
