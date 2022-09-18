import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import ImageColors from 'react-native-image-colors';
import {Spacing} from '../theme/Spacing';
import {SharedElement} from 'react-navigation-shared-element';
import Shimmer from 'react-native-shimmer';
import {GridCard} from './GridView';

export const ProductsGrid = ({
  items,
  style,
  onPress,
  HeaderComponent,
  onScroll,
  contentContainerStyle,
  scrollIndicatorInsets,
}) => {
  const {colors} = useTheme();

  return (
    <Animated.FlatList
      data={items}
      style={[styles.gridView, style]}
      numColumns={3}
      nestedScrollEnabled={true}
      spacing={5}
      renderItem={({item, index}) => (
        <GridCard
          index={index}
          text={item.product_name}
          id={item.product_id}
          pic_url={item.pic_url}
          colors={colors}
          onPress={color => (onPress ? onPress(index, color) : {})}
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
