import React from 'react';

import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {MyDarkTheme, MyLightTheme} from './theme/Theme';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar, useColorScheme, View} from 'react-native';
import AppColors from './theme/Colors';
import {RegisterScreen} from './screens/RegisterScreen';
import {AppNavigationNames} from './AppNavigationNames';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {OverviewScreen} from './screens/OverviewScreen';
import {CategoriesScreen} from './screens/CategoriesScreen';
import {CategoryOverviewScreen} from './screens/CategoryOverview';
import {ProductOverviewScreen} from './screens/ProductOverviewScreen';
import {useCollapsibleHeader} from 'react-navigation-collapsible';
import {color} from 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import {ModalLoader} from './components/ModalLoader';
import {useSelector} from 'react-redux';
import mainReducer from './redux/reducers';

export const App = () => {
  const Stack = createSharedElementStackNavigator();
  const {colors} = useTheme();
  const colorScheme = useColorScheme();
  const {isLoading} = useSelector(state => mainReducer.state);

  return (
    <PaperProvider
      theme={colorScheme === 'dark' ? MyLightTheme : MyLightTheme}
      settings={{
        icon: props => <Ionicons {...props} />,
      }}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? MyLightTheme : MyLightTheme}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'dark-content' : 'dark-content'}
          backgroundColor={MyLightTheme.colors.background}
        />
        <Stack.Navigator
          screenOptions={({navigation, route}) => ({
            // headerBackVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerShadowVisible: false,
          })}>
          <Stack.Screen
            name={AppNavigationNames.Register}
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={AppNavigationNames.About}
            component={OverviewScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={AppNavigationNames.Categories}
            component={CategoriesScreen}
            options={{headerBackVisible: false}}
          />
          <Stack.Screen
            options={({navigation, route}) => ({
              headerTitle: route.params.title,
              headerStyle: {
                backgroundColor: route.params.color,
              },
              headerTintColor: colors.card,
            })}
            name={AppNavigationNames.CategoryOverview}
            component={CategoryOverviewScreen}
            sharedElements={(route, otherRoute, showing) => {
              return [route.params.id];
            }}
          />
          <Stack.Screen
            options={({navigation, route}) => ({
              headerTitle: route.params.title,
              headerStyle: {
                backgroundColor: route.params.color,
              },
              headerTintColor: colors.card,
            })}
            name={AppNavigationNames.ProductOverviewScreen}
            component={ProductOverviewScreen}
            sharedElements={(route, otherRoute, showing) => {
              return [route.params.id];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position="bottom" />
      <ModalLoader />
    </PaperProvider>
  );
};

export default App;
