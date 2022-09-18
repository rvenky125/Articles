import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {GridCard} from './GridView';

export const ShimmerGrid = () => {
  return (
    <FlatList
      data={items}
      style={[styles.gridView, style]}
      numColumns={3}
      nestedScrollEnabled={true}
      spacing={5}
      renderItem={({item, index}) => (
        <GridCard
          index={index}
          text={item.category_name}
          id={item.category_id}
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
