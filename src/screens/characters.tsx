import {
  getCharacterListRequestAction,
  getCharacterRequestAction,
} from '@actions/character';
import {scrollCharactersAction} from '@actions/scroll';
import FullCharacterCard from '@components/cards/fullCharacter';
import ReducedCharacterCard from '@components/cards/reducedCharacter';
import InfiniteScroll from '@components/infiniteScroll';
import Spinner from '@components/spinner';
import {useDispatch, useSelector} from '@store';
import React, {useState} from 'react';
import * as RN from 'react-native';

function CharactersScreen() {
  const [id, setId] = useState<number>();
  const dispatch = useDispatch();

  const state = useSelector(({characterReducer}) => characterReducer);
  const {character, characterList, pagination, isLoading} = state;

  const offset = useSelector(
    ({scrollReducer}) => scrollReducer.characterOffset,
  );

  const fetchCharacter = (id: number) => {
    setId(id);
    id && dispatch(getCharacterRequestAction(id));
  };

  const getData = () => {
    if (id) {
      return isLoading ? (
        <Spinner />
      ) : (
        <FullCharacterCard character={character} />
      );
    } else {
      return (
        <InfiniteScroll
          offset={offset}
          data={characterList}
          isLoading={isLoading}
          pagination={pagination}
          numColumns={{portrait: 2, landscape: 4}}
          load={page => dispatch(getCharacterListRequestAction(page))}
          onScroll={offset => dispatch(scrollCharactersAction(offset))}
          renderItem={({item}) => <ReducedCharacterCard character={item} />}
        />
      );
    }
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
