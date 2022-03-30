import FullCharacterCard from '@components/cards/fullCharacter';
import ReducedCharacterCard from '@components/cards/reducedCharacter';
import InfiniteScroll from '@components/infiniteScroll';
import {useScroll} from '@context/scroll';
import Character from '@models/character';
import {CharacterListQuery} from '@services/character';
import React, {useState} from 'react';
import * as RN from 'react-native';

function CharactersScreen() {
  const [id, setId] = useState<number>();
  const {character} = useScroll();

  const getData = () => {
    if (id) {
      return <FullCharacterCard id={id} />;
    } else {
      return (
        <InfiniteScroll
          offset={character.offset}
          query={CharacterListQuery}
          onScroll={character.scroll}
          numColumns={{portrait: 2, landscape: 4}}
          renderItem={({item}: RN.ListRenderItemInfo<Character>) => (
            <ReducedCharacterCard character={item} />
          )}
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
          onChangeText={text => setId(Number(text))}
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
