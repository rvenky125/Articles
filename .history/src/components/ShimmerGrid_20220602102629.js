import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
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
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      style={[styles.gridView, style]}
      numColumns={3}
      nestedScrollEnabled={true}
      spacing={5}
      renderItem={({item, index}) => (
        <Shimmer animating={isLoading}>
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {backgroundColor: colors.primaryContainer},
            ]}
            onPress={() => onPress(color)}>
            {/* <Shimmer> */}
            <SharedElement
              id={pic_url}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: Spacing.SpaceSmall,
              }}>
              <Image
                source={{uri: pic_url}}
                style={{flex: 1, borderRadius: Spacing.SpaceSmall}}
              />
            </SharedElement>
            {/* </Shimmer> */}
            <View
              style={{
                paddingStart: 5,
                paddingVertical: 4,
                backgroundColor: color,
                borderBottomStartRadius: Spacing.SpaceSmall,
                borderBottomEndRadius: Spacing.SpaceSmall,
              }}>
              <Text style={{color: colors.card}}>{text}</Text>
            </View>
          </TouchableOpacity>
        </Shimmer>
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
