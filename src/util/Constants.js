import {Dimensions, Platform} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const tabBarHeight = Platform.OS === 'ios' ? 100 : 70;