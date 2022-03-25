import FullCharacterCard from '@components/cards/fullCharacter';
import ReducedCharacterCard from '@components/cards/reducedCharacter';
import Spinner from '@components/spinner';
import useOrientation from '@hooks/useOrientation';
import {Pagination} from '@models/pagination';
import {
  getCharacter,
  getCharacterList,
  setScrollPosition,
} from '@services/character';
import {useDispatch, useSelector} from '@store';
import React, {useEffect, useRef, useState} from 'react';
import * as RN from 'react-native';

function CharactersScreen() {
  const [id, setId] = useState<number>();
  const dispatch = useDispatch();

  const state = useSelector(({characterReducer}) => characterReducer);
  const {character, characterList, isLoading, scrollPosition: offset} = state;

  const [pagination, setPagination] = useState<Pagination>();

  useEffect(() => {
    !characterList.length && dispatch(getCharacterList()).then(setPagination);
  }, []);

  const fetchCharacter = (id: number) => {
    setId(id);
    id && dispatch(getCharacter(id));
  };

  const {isPortrait} = useOrientation();

  const listRef = useRef<RN.FlatList>(null);

  useEffect(() => {
    listRef.current?.scrollToOffset({offset});
  }, [isPortrait]);

  const endReached = () => {
    if (!isLoading && pagination) {
      const {nextPage, hasMore} = pagination;
      hasMore && dispatch(getCharacterList(nextPage)).then(setPagination);
    }
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
        data={characterList}
        scrollEventThrottle={16}
        key={Number(isPortrait)}
        onEndReached={endReached}
        numColumns={isPortrait ? 2 : 4}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{paddingBottom}}
        ListFooterComponent={isLoading ? <Spinner /> : null}
        onScroll={({nativeEvent}) => {
          const position =
            nativeEvent.contentOffset.y * (isPortrait ? 0.5 : 2.4);
          dispatch(setScrollPosition(position));
        }}
        renderItem={({item}) => <ReducedCharacterCard character={item} />}
      />
    );
  };

  return (
    <RN.SafeAreaView style={styles.container}>
      <RN.View style={styles.header}>
        <RN.TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={text => fetchCharacter(Number(text))}
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
