import {
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
  ListRenderItemInfo,
} from 'react-native';
import {SearchBar} from '../../components/searchBar/SearchBar.tsx';
import {RoundButton} from '../../components/roundButton/RoundButton.tsx';
import {NoResults} from '../../components/noResults/NoResults.tsx';
import {ListItem} from '../../components/listItem/ListItem.tsx';
import {Article} from '../../types/Article.ts';
import React, {useCallback} from 'react';
import {styles} from './Home.styles.ts';
import {HomeViewProps} from './Home.types.ts';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SquareButton} from '../../components/squareButton/SquareButton.tsx';

export const HomeView: React.FC<HomeViewProps> = ({
  news,
  isLoading,
  error,
  onGoToArticle,
  onModalOpen,
  refRBSheet,
  onArticleDelete,
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <Button title="delete" onPress={() => refRBSheet.current.open()} />
      <FlatList
        style={styles.homeView}
        ListHeaderComponent={() => (
          <View style={styles.topBar}>
            <SearchBar />
            <RoundButton variant="plus" onPress={() => {}} />
          </View>
        )}
        data={news}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{height: 40}} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return isLoading ? (
            <Text>Loading</Text>
          ) : (
            <View style={styles.noRes}>
              <NoResults />
            </View>
          );
        }}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
        onEndReached={() => {}}
        onEndReachedThreshold={0.2}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        height={250}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.33)',
          },
          container: {
            borderRadius: 25,
          },
        }}
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
