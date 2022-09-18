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

const CategoriesScreen = ({navigation}) => {
  const {colors} = useTheme();

  const {isLoading} = useSelecto(state => state.mainReducer);
  const dispatch = useDispatch();

  const [items, setItems] = React.useState([
    {text: 'TURQUOISE', code: '#1abc9c', id: '1'},
    {text: 'EMERALD', code: '#2ecc71', id: '2'},
    {text: 'PETER RIVER', code: '#3498db', id: '3'},
    {text: 'AMETHYST', code: '#9b59b6', id: '4'},
    {text: 'WET ASPHALT', code: '#34495e', id: '5'},
    {text: 'GREEN SEA', code: '#16a085', id: '6'},
    {text: 'NEPHRITIS', code: '#27ae60', id: '7'},
    {text: 'BELIZE HOLE', code: '#2980b9', id: '8'},
    {text: 'WISTERIA', code: '#8e44ad', id: '9'},
    {text: 'MIDNIGHT BLUE', code: '#2c3e50', id: '10'},
    {text: 'SUN FLOWER', code: '#f1c40f', id: '11'},
    {text: 'CARROT', code: '#e67e22', id: '12'},
    {text: 'ALIZARIN', code: '#e74c3c', id: '13'},
    {text: 'CLOUDS', code: '#ecf0f1', id: '14'},
    {text: 'CONCRETE', code: '#95a5a6', id: '15'},
    {text: 'ORANGE', code: '#f39c12', id: '16'},
    {text: 'PUMPKIN', code: '#d35400', id: '17'},
    {text: 'POMEGRANATE', code: '#c0392b', id: '19'},
    {text: 'SILVER', code: '#bdc3c7', id: '20'},
    {text: 'ASBESTOS', code: '#7f8c8d', id: '21'},
  ]);

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

  const registerPrivateFun = async () => {
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
