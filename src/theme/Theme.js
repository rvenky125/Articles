import AppColors from './Colors';
import {DefaultTheme} from 'react-native-paper';

export const MyLightTheme = {
  ...DefaultTheme,
  dark: false,
  // Specify custom property
  colors: {
    ...DefaultTheme.colors,
    accent: AppColors.appBlueColor,
    card: AppColors.brightWhite,
    primary: '#006c52',
    onPrimary: '#ffffff',
    primaryContainer: '#81f8d1',
    onPrimaryContainer: '#002117',
    background: AppColors.appScaffold,
    onSurface: AppColors.scaffoldDarkBlackDark,
    surface: AppColors.appScaffold,
    text: AppColors.scaffoldDarkBlackDark,
    placeholder: AppColors.border,
    border: AppColors.border,
    notification: AppColors.surface,
  },
  fonts: {
    regular: {fontFamily: 'Ubuntu-Regular'},
    // regular: {
    //     fontFamily: 'sans-serif',
    //     fontWeight: 'normal',
    //   },
    medium: {
      fontFamily: 'Ubuntu-Medium',
      // fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Ubuntu-Light',
      // fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Ubuntu-Bold',
      // fontWeight: 'normal',
    },
  },
};

export const MyDarkTheme = {
  ...DefaultTheme,
  dark: true,
  // Specify custom property
  switchBackground: AppColors.cardBackgroundBlackDark,
  colors: {
    ...DefaultTheme.colors,
    accent: AppColors.appBlueColor,
    backdrop: AppColors.cardBackgroundBlackDark,
    primary: AppColors.appBlueColor,
    background: AppColors.scaffoldDarkBlackDark,
    card: AppColors.cardBackgroundBlackDark,
    onSurface: AppColors.brightWhite,
    surface: AppColors.cardBackgroundBlackDark,
    text: AppColors.brightWhite,
    placeholder: AppColors.border,
    border: AppColors.onSurface,
    notification: AppColors.cardBackgroundBlackDark,
  },
};

//dark (boolean): whether this is a dark theme or light theme.
// mode ('adaptive' | 'exact'): color mode for dark theme (See Dark Theme).
// roundness (number): roundness of common elements, such as buttons.
// colors (object): various colors used throughout different elements.
// primary - primary color for your app, usually your brand color.
// accent - secondary color for your app which complements the primary color.
// background - background color for pages, such as lists.
// surface - background color for elements containing content, such as cards.
// text - text color for content.
// disabled - color for disabled elements.
// placeholder - color for placeholder text, such as input placeholder.
// backdrop - color for backdrops of various components such as modals.
// onSurface - background color for snackbars
// notification - background color for badges
// fonts (object): various fonts used throughout different elements.
// regular
// medium
// light
// thin
// animation (object)
// scale - scale for all animations

////Arrow android themes
//@SuppressLint("ConflictingOnColor")
// private val LightBlueColorPalette = lightColors(
//     primary = appBlueColor,
//     onPrimary = textPrimaryLightColor,
//     onSecondary = textSecondaryLightColor,
//     onBackground = appScaffold,
//     secondary = appLightGreyColor,
//     background = appBackground
// )

// @SuppressLint("ConflictingOnColor")
// private val DarkBlueColorPalette = darkColors(
//     primary = appBlueColor,
//     primaryVariant = appBlueColor,
//     onPrimary = textPrimaryDarkColor,
//     onSecondary = textSecondaryDarkColor,
//     onBackground = cardBackgroundBlackDark,
//     secondary = cardBackgroundBlackDark,
//     background = scaffoldDarkBlackDark
// )
