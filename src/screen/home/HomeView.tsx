import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SearchBar} from '../../components/searchBar/SearchBar.tsx';
import {RoundButton} from '../../components/roundButton/RoundButton.tsx';
import {NoResults} from '../../components/noResults/NoResults.tsx';
import {useEffect} from 'react';
import {ListItem} from '../../components/listItem/ListItem.tsx';
import {useAppDispatch, useAppSelector} from '../../store/hooks/redux.ts';
import {fetchNews} from '../../store/hooks/ActionCreator.ts';

export const HomeView = () => {
  const dispatch = useAppDispatch();
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={styles.homeView}
        ListHeaderComponent={() => (
          <View style={styles.topBar}>
            <SearchBar />
            <RoundButton variant="plus" />
          </View>
        )}
        data={news}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ListItem article={item} id={item.id} />}
        ItemSeparatorComponent={() => <View style={{height: 40}} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View style={styles.noRes}>
              <NoResults />
            </View>
          );
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              dispatch(fetchNews());
            }}
          />
        }
        onEndReached={() => {}}
        onEndReachedThreshold={0.2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeView: {
    paddingHorizontal: 30,
    paddingTop: 30,
    flex: 1,
  },
  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 40,
  },
  noRes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
