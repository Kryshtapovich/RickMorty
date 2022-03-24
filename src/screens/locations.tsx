import LocationCard from '@components/cards/location';
import Spinner from '@components/spinner';
import Store from '@models/store';
import {getLocations} from '@services/location';
import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function LocationsScreen() {
  const dispatch = useDispatch();

  const locations = useSelector(
    ({locationReducer}: Store) => locationReducer.locations,
  );

  const nextPage = useSelector(
    ({locationReducer}: Store) => locationReducer.nextPage,
  );

  const isLoading = useSelector(
    ({locationReducer}: Store) => locationReducer.isLoading,
  );

  const endReached = () => {
    !isLoading && dispatch(getLocations(nextPage));
  };

  useEffect(() => {
    !locations.length && dispatch(getLocations());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={locations}
        style={styles.list}
        scrollEventThrottle={16}
        onEndReached={endReached}
        keyExtractor={(_, i) => i.toString()}
        ListFooterComponent={isLoading ? <Spinner /> : null}
        renderItem={({item}) => <LocationCard location={item} />}
      />
    </SafeAreaView>
  );
}

export default LocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
