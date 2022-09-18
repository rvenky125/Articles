import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View, Animated, Text} from 'react-native';
import Shimmer from 'react-native-shimmer';
import {Spacing} from '../theme/Spacing';
import {GridCard} from './GridView';

export const ShimmerGrid = ({
  style,
  HeaderComponent,
  onScroll,
  contentContainerStyle,
  scrollIndicatorInsets,
  isLoading,
}) => {
  const {colors} = useTheme();
  return (
    <Animated.FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      style={[styles.gridView, style]}
      numColumns={3}
      nestedScrollEnabled={true}
      spacing={5}
      renderItem={({item, index}) => (
        <Shimmer>
          <View style={{...styles.itemContainer,}} />
        </Shimmer>
      )}
      ListHeaderComponent={HeaderComponent}
      onScroll={onScroll}
      //   contentContainerStyle={contentContainerStyle}
      //   scrollIndicatorInsets={scrollIndicatorInsets}
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
