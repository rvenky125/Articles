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

export default function ProductsGrid({
  items,
  style,
  onPress,
  HeaderComponent,
  onScroll,
  contentContainerStyle,
  scrollIndicatorInsets,
}) {
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
          item={item}
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
}

export default function CategoriesGrid({
  items,
  style,
  onPress,
  HeaderComponent,
  onScroll,
  contentContainerStyle,
  scrollIndicatorInsets,
}) {
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
          item={item}
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
}

const GridCard = ({item, index, colors, onPress}) => {
  const [color, setColor] = useState(colors.primary);

  const fetchColor = async () => {
    try {
      const result = await ImageColors.getColors(item.pic_url, {
        // fallback: '#ffffff',
        cache: true,
      });

      switch (result.platform) {
        case 'android':
          // android result properties
          setColor(result.vibrant);
          break;
        case 'ios':
          // iOS result properties
          setColor(result.primary);
          break;
        default:
          setColor(colors.primaryContainer);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchColor();
  }, []);

  return (
    <TouchableOpacity
      style={[styles.itemContainer, {backgroundColor: colors.primaryContainer}]}
      onPress={() => onPress(color)}>
      {/* <Shimmer> */}
      <SharedElement
        id={item.id}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          borderRadius: Spacing.SpaceSmall,
        }}>
        <Image
          source={{uri: item.pic_url}}
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
        <Text style={{color: colors.card}}>
          {item?.category_name ? item.category_name : item.product_name}
        </Text>
      </View>
    </TouchableOpacity>
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
