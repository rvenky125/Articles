import {useTheme} from '@react-navigation/native';
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import {DefButton} from '../components/DefButton';
import CategoriesGrid from '../components/GridView';
import {Spacing} from '../theme/Spacing';
import {SCREEN_HEIGHT} from '../util/Constants';
import {Platform} from 'react-native';
import {AppNavigationNames} from '../AppNavigationNames';
import {
  CollapsibleSubHeaderAnimator,
  useCollapsibleHeader,
} from 'react-navigation-collapsible';
import AppColors from '../theme/Colors';
import { useDispatch, useSelector } from 'react-redux';

const CategoriesScreen = ({navigation}) => {
  const {colors} = useTheme();

  const {isLoading} = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();


  const fetchCategories = async () => {
    dispatch(setIsLoading(true));
    const [result, message] = await register(fullName, email, city, password);
    dispatch(setIsLoading(false));
    if (message) {
      setTimeout(() => {
        showErrorToast(message);
      }, 300);
    }

    if (result) {
      
    }
  };







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
      <CategoriesGrid
        items={items}
        onPress={(index, color) => {
          const picURL = 'https://picsum.photos/id/' + index + 3 + '/500';
          navigation.push(AppNavigationNames.CategoryOverview, {
            id: items[index].id,
            color: color,
            url: picURL,
            title: items[index].text,
          });
          console.log('btn called');
        }}
        style={{paddingHorizontal: Spacing.SpaceSmall}}
        onScroll={onScroll}
        contentContainerStyle={{paddingTop: containerPaddingTop}}
        scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
      />
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

export {CategoriesScreen};
