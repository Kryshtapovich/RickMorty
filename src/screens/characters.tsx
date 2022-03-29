import FullCharacterCard from '@components/cards/fullCharacter';
import ReducedCharacterCard from '@components/cards/reducedCharacter';
import InfiniteScroll from '@components/infiniteScroll';
import Spinner from '@components/spinner';
import {useStore} from '@stores';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import * as RN from 'react-native';

function CharactersScreen() {
  const [id, setId] = useState<number>();

  const {characterStore, scrollStore} = useStore();
  const {character, characterList, isLoading} = characterStore;

  const {characterOffset} = scrollStore;

  const fetchCharacter = (id: number) => {
    setId(id);
    id && characterStore.getCharacter(id);
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
          data={characterList}
          isLoading={isLoading}
          offset={characterOffset}
          load={characterStore.getCharacterList}
          onScroll={scrollStore.scrollCharacters}
          numColumns={{portrait: 2, landscape: 4}}
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

export default observer(CharactersScreen);

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
