import React, { useState } from "react";

import { TextInput, View } from "react-native";

import debounce from "lodash.debounce";
import { observer } from "mobx-react-lite";

import { InfiniteScroll, SafeAreaView } from "@components/atoms";
import { CharacterCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { useStore } from "@mobx/stores";
import { Color } from "@utils";

import { styles } from "./styles";

export const CharactersScreen = observer(() => {
  const [name, setName] = useState<string>();

  const { characterStore, scrollStore } = useStore();
  const { characterOffset, scrollCharacters } = scrollStore;
  const { filteredCharacters, characters, error, getCharactersByName, getCharacters } =
    characterStore;

  const fetchCharacter = debounce((name: string) => {
    setName(name);
    getCharactersByName(name);
  }, 200);

  const loadMore = (page: number) => {
    return name ? getCharactersByName(name, page) : getCharacters(page);
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={fetchCharacter}
          placeholderTextColor={Color.GRAY}
        />
      </View>
      <InfiniteScroll
        load={loadMore}
        offset={characterOffset}
        onScroll={scrollCharacters}
        numColumns={{ portrait: 2, landscape: 4 }}
        data={name ? filteredCharacters : characters}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
      <ErrorModal errorText={error} />
    </SafeAreaView>
  );
});
