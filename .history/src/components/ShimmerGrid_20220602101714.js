import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {GridCard} from './GridView';

export const ShimmerGrid = ({
  style,
  ListHeaderComponent,
  onScroll,
  contentContainerStyle,
  scrollIndicatorInsets,
}) => {
  const {colors} = useTheme();
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      style={[styles.gridView, style]}
      numColumns={3}
      nestedScrollEnabled={true}
      spacing={5}
      renderItem={({item, index}) => (
          <Shimmer
        <GridCard
          index={index}
          text={''}
          id={''}
          pic_url={''}
          colors={colors}
          onPress={color => {}}
        />
      )}
      ListHeaderComponent={HeaderComponent}
      onScroll={onScroll}
      contentContainerStyle={contentContainerStyle}
      scrollIndicatorInsets={scrollIndicatorInsets}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 5,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: Spacing.SpaceSmall,
    height: 115,
    margin: 5,
    flex: 1 / 3,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
