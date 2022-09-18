import {useIsFocused, useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import {DefButton} from '../components/DefButton';
import {Spacing} from '../theme/Spacing';
import {SCREEN_HEIGHT} from '../util/Constants';
import {Platform} from 'react-native';
import {AppNavigationNames} from '../AppNavigationNames';
import {
  CollapsibleSubHeaderAnimator,
  useCollapsibleHeader,
} from 'react-navigation-collapsible';
import AppColors from '../theme/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../data/apis/categories';
import {setIsLoading} from '../redux/actions';
import {ModalLoader} from '../components/ModalLoader';
import {CategoriesGrid} from '../components/GridView';
import {ShimmerGrid} from '../components/ShimmerGrid';

export const CategoriesScreen = ({navigation}) => {
  const {colors} = useTheme();

  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  const fetchCategories = async () => {
    setIsLoading(true);
    const [result, message] = await getCategories();
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
      setCategories(result);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCategories();
    }, 100);

    return () => {};
  }, []);

  const scrollOffset = new Animated.Value(0);

  const {
    onScroll,
    onScrollWithListener,
    containerPaddingTop,
    scrollIndicatorInsetTop,
    positionY,
    translateY,
    progress,
  } = useCollapsibleHeader({
    navigationOptions: {
      headerStyle: {
        height: 200,
        // backgroundColor: colors.background,
      },
      headerTitleStyle: {
        color: colors.card,
        elevation: 5,
        shadowColor: colors.text,
        padding: 5,
        // backgroundColor: colors.text,
      },
      headerBackground: (
        <Image
          source={{
            uri: 'https://artwork.wallartprints.com/media/catalog/category/mountain-pictures.jpg',
          }}
          style={{flex: 1}}
        />
      ),
    },
    config: {
      // collapsedColor: colors.primaryContainer,
      // useNativeDriver: true /* Optional, default: true */,
      // elevation: 4 /* Optional */,
      // disableOpacity: true /* Optional, default: false */,
    },
  });

  return (
    <View style={styles.container}>
      {is}
      <CategoriesGrid
        items={categories}
        onPress={(index, color) => {
          navigation.push(AppNavigationNames.CategoryOverview, {
            id: categories[index].pic_url,
            color: color,
            url: categories[index].pic_url,
            title: categories[index].category_name,
          });
          console.log('btn called');
        }}
        style={{paddingHorizontal: Spacing.SpaceSmall}}
        onScroll={onScroll}
        contentContainerStyle={{paddingTop: containerPaddingTop}}
        scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
      />

      {isLoading ? (
        <ShimmerGrid
          style={{paddingHorizontal: Spacing.SpaceSmall}}
          onScroll={onScroll}
          // contentContainerStyle={{paddingTop: containerPaddingTop}}
          // scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
          isLoading={isLoading}
        />
      ) : null}

      {/* <ModalLoader show={isLoading} /> */}
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
