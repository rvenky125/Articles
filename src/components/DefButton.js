import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Spacing} from '../theme/Spacing';
import {typography} from '../theme/Typography';
import Button from 'react-native-button';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppColors from '../theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
// import {useTheme} from 'react-native-paper';

export const ArrowIconBtnWithText = ({text, style, textStyle, onPress}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        ...style,
      }}>
      <Text
        style={{...typography.h5, color: colors.primary, fontWeight: '700'}}>
        {text}
      </Text>
      <DefIconButton onPress={onPress} />
    </View>
  );
};

export const DefIconButton = ({icon, onPress, style, isDisabled}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => {}}
      disabled={isDisabled}>
      <LinearGradient
        angle={280}
        useAngle
        style={[styles.fabButtonSize, style]}
        colors={[colors.onPrimaryContainer, colors.primaryContainer]}>
        <FontAwesome5
          name={icon ? icon : 'arrow-right'}
          color={colors.card}
          size={20}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const DefButton = ({text, onPress, style, isDisabled}) => {
  const {colors} = useTheme();

  return (
    <Button
      style={{fontSize: 20, color: colors.onPrimary}}
      styleDisabled={{color: 'white'}}
      disabled={isDisabled}
      containerStyle={{
        width: '100%',
        padding: 11,
        height: 50,
        overflow: 'hidden',
        borderRadius: Spacing.SpaceMedium,
        backgroundColor: colors.primary,
        ...style,
      }}
      disabledContainerStyle={{backgroundColor: colors.secondary}}
      onPress={() => (onPress ? onPress() : {})}>
      {text}
    </Button>
    // <TouchableOpacity
    //   style={[styles.container, {backgroundColor: colors.primary}, style]}
    //   onPress={onPress}>
    //   <Text
    //     style={{
    //       color: colors.card,
    //       padding: Spacing.SpaceSmall,
    //       fontSize: 21,
    //       fontWeight: '400',
    //     }}>
    //     {text}
    //   </Text>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderRadius: Spacing.SpaceMedium,
  },
  fabButtonSize: {
    borderRadius: Spacing.SpaceLarge * 1.5,
    width: Spacing.SpaceLarge * 3.7,
    height: Spacing.SpaceLarge * 2.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
