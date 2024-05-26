import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from '../../components/searchBar/SearchBar.tsx';
import {RoundButton} from '../../components/roundButton/RoundButton.tsx';
import {NoResults} from '../../components/noResults/NoResults.tsx';
import {useEffect, useState} from 'react';
import {MockApiData} from '../../api/MockApi.ts';
import {ListItem} from '../../components/listItem/ListItem.tsx';
import {Article} from '../../types/Article.ts';

export const HomeView = () => {
  const [articles, setArticles] = useState<Article[] | []>([]);

  useEffect(() => {
    setArticles(MockApiData);
  }, []);

  return (
    <View style={styles.homeView}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.topBar}>
            <SearchBar />
            <RoundButton variant="plus" />
          </View>
        )}
        data={articles}
        keyExtractor={item => item.key.toString()}
        renderItem={({item}) => <ListItem article={item} />}
        ItemSeparatorComponent={() => <View style={{height: 40}} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.noRes}>
            <NoResults />
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={true} onRefresh={() => {}} />
        }
        onEndReached={() => {
          alert('ALEPT');
        }}
        onEndReachedThreshold={0.2}
        // ListFooterComponent={(isMentorsLoading && mentorsData.length > 0 && (
        //     <Loader isFullScreen={false} loaderSize={LOADER_SIZE_SMALL} />
        // ))}
      />
    </View>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
