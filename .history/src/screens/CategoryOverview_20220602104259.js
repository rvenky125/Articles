import {useIsFocused, useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {DefButton} from '../components/DefButton';
import CategoriesGrid from '../components/GridView';
import {Spacing} from '../theme/Spacing';
import {Platform} from 'react-native';
import {typography} from '../theme/Typography';
import {AppNavigationNames} from '../AppNavigationNames';
import {SharedElement} from 'react-navigation-shared-element';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../data/apis/categories';
import {ModalLoader} from '../components/ModalLoader';
import {showErrorToast} from '../util/PresentationContants';
import {ProductsGrid} from '../components/ProductsGrid';
import { ShimmerGrid } from '../components/ShimmerGrid';

export const CategoryOverviewScreen = ({navigation, route}) => {
  const {colors} = useTheme();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isFocused = useIsFocused();

  const fetchCategories = async () => {
    setIsLoading(true);
    const [result, message] = await getProducts(route.params.id);
    if (!isFocused) {
      return;
    }
    setIsLoading(false);
    if (message) {
      setTimeout(() => {
        showErrorToast(message);
      }, 300);
    }
    if (result) {
      setProducts(result);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCategories();
    }, 100);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={route.params.color}
        barStyle={'light-content'}
      />
      <View>
        <SharedElement id={route.params.id}>
          <Image
            source={{uri: route.params.url}}
            style={{width: '100%', height: 200}}
            resizeMode={'cover'}
          />
        </SharedElement>
        <Text
          style={{
            position: 'absolute',
            color: colors.card,
            bottom: 0,
            paddingVertical: Spacing.SpaceVerySmall,
            paddingHorizontal: Spacing.SpaceSmall,
            backgroundColor: route.params.color,
            fontWeight: 'bold',
            fontSize: Spacing.SpaceMedium,
            letterSpacing: 1.3,
            borderTopEndRadius: Spacing.SpaceSmall,
          }}>
          {'A sample text that describes picture'}
        </Text>
      </View>

      {!isLoading ? (
        <ProductsGrid
          HeaderComponent={
            <Text
              style={[
                typography.subtitle1,
                {
                  color: colors.text,
                  marginStart: Spacing.SpaceSemiSmall,
                  fontWeight: '600',
                },
              ]}>
              Products
            </Text>
          }
          onPress={(index, color) => {
            navigation.navigate(AppNavigationNames.ProductOverviewScreen, {
              color: color,
              url: products[index].pic_url,
              title: products[index].product_name,
              id: products[index].pic_url,
            });
          }}
          items={products}
          style={{paddingHorizontal: Spacing.SpaceSmall}}
        />
      ) : null}

      {isLoading ? (
        <ShimmerGrid
          style={{paddingHorizontal: Spacing.SpaceSmall}}
          onScroll={onScroll}
          contentContainerStyle={{paddingTop: containerPaddingTop}}
          scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
          isLoading={isLoading}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    //   justifyContent: 'space-between',
  },
});
