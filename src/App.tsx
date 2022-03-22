import * as RN from 'react-native';

import React, {useEffect, useState} from 'react';
import {getAllCharacters, getCharacter} from './redux/services/character';
import {useDispatch, useSelector} from 'react-redux';

import CharacterCard from './components/character';
import Store from '@models/store';

function App() {
  const [id, setId] = useState<number>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);
  
  const character = useSelector(
    ({characterReducer}: Store) => characterReducer.character,
  );

  const characterList = useSelector(
    ({characterReducer}: Store) => characterReducer.characterList,
  );

  const fetchCharacters = (id: number) => {
    setId(id);
    id && dispatch(getCharacter(id));
  };

  const getData = () => {
    return id ? (
      <CharacterCard character={character} />
    ) : (
      <RN.FlatList
        data={characterList}
        renderItem={({item}) => <CharacterCard character={item} />}
        keyExtractor={c => c.id.toString()}
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

export default App;

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
