import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  View,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import {SearchBar} from '../../components/searchBar/SearchBar.tsx';
import {RoundButton} from '../../components/roundButton/RoundButton.tsx';
import {NoResults} from '../../components/noResults/NoResults.tsx';
import {ListItem} from '../../components/listItem/ListItem.tsx';
import {Article} from '../../types/Article.ts';
import React, {useCallback} from 'react';
import {bottomSheetCustomStyles, styles} from './Home.styles.ts';
import {HomeViewProps} from './Home.types.ts';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SquareButton} from '../../components/squareButton/SquareButton.tsx';

export const HomeView: React.FC<HomeViewProps> = ({
  news,
  isLoading,
  error,
  onGoToArticle,
  onGoToNewPost,
  onModalOpen,
  refRBSheet,
  onArticleDelete,
  query,
  handleQueryChange,
  onFetchNews,
}) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Article>) => (
      <ListItem
        article={item}
        id={item.id}
        onPress={() => onGoToArticle(item.id)}
        onLongPress={() => onModalOpen(item.id)}
      />
    ),
    [onGoToArticle, onModalOpen],
  );
  const Separator = useCallback(() => <View style={{height: 40}} />, []);

  const ListEmptyComponent = useCallback((loading: boolean) => {
    return loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <View style={styles.noRes}>
        <NoResults />
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <SearchBar value={query} onChangeText={handleQueryChange} />
        <RoundButton variant="plus" onPress={onGoToNewPost} />
      </View>
      <FlatList
        style={styles.homeView}
        data={news}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmptyComponent(isLoading)}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onFetchNews} />
        }
        onEndReached={() => {}}
        onEndReachedThreshold={0.2}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        height={250}
        customStyles={bottomSheetCustomStyles}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View style={styles.bottomSheet}>
          <SquareButton
            title="Delete"
            variant="red"
            onPress={onArticleDelete}
          />
          <SquareButton
            title="Cancel"
            variant="blue"
            onPress={() => refRBSheet.current.close()}
          />
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};
