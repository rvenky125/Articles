import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  // TextInput,
  TouchableOpacity,
} from 'react-native';
import {IconButton, useTheme} from 'react-native-paper';
import {Spacing} from '../theme/Spacing';
import {InputOutline, InputStandard} from 'react-native-input-outline';

export const DefTextField = ({
  value,
  onValueChange,
  icon,
  placeholder,
  style,
  keyboardType,
  secureTextEntry,
  backgroundColor,
}) => {
  const {colors} = useTheme();
  const [showText, setShowText] = useState(true);

  const inputRef = useRef(null); // fully TypeScript enabled
  const [error, setError] = useState(null);

  const showError = () => {
    setError('This is your error message!');
  };

  const hideError = () => {
    setError(undefined);
  };

  return (
    <InputStandard
      ref={inputRef}
      error={error} // wont take effect until a message is passed
      backgroundColor={backgroundColor ? backgroundColor : colors.background}
      activeColor={colors.primary}
      inactiveColor={colors.placeholder}
      // style={[
      //   styles.textInput,
      //   {color: colors.text},
      //   icon ? null : {marginStart: Spacing.SpaceSemiSmall},
      // ]}
      keyboardType={keyboardType}
      secureTextEntry={showText}
      onChangeText={text => {
        onValueChange(text);
      }}
      placeholder={placeholder}
      // placeholderTextColor={colors.placeholder}
      value={value}
      fontSize={16}
      paddingVertical={0}
      style={style}
      trailingIcon={() =>
        secureTextEntry ? (
          <IconButton
            onPress={() => setShowText(!showText)}
            icon={showText ? 'eye-off' : 'eye'}
            color={colors.placeholder}
          />
        ) : null
      }
    />

    // <View style={[styles.container, {backgroundColor: colors.card}, style]}>
    //   <View style={{flexDirection: 'row'}}>
    //     {icon ? <IconButton icon={icon} /> : null}
    //     <TextInput
    //       onChangeText={text => {
    //         onValueChange(text);
    //       }}
    //       placeholder={placeholder}
    //       placeholderTextColor={colors.placeholder}
    //       value={value}
    //       style={[
    //         styles.textInput,
    //         {color: colors.text},
    //         icon ? null : {marginStart: Spacing.SpaceSemiSmall},
    //       ]}
    //       keyboardType={keyboardType}
    //       secureTextEntry={showText}
    //       //   editable={props.enabled}
    //       //   onFocus={e => {}}
    //     />
    //   </View>

    //   {secureTextEntry ? (
    //     // showText ? (
    //     //   <IconButton onPress={() => setShowText(!showText)} name="eye-slash" />
    //     // ) : (
    //     //   <IconButton onPress={() => setShowText(!showText)} name="eye" />
    //     // )
    //     <IconButton
    //       onPress={() => setShowText(!showText)}
    //       icon={showText ? 'eye-off' : 'eye'}
    //     />
    //   ) : (
    //     <View />
    //   )}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.SpaceSemiSmall,
    paddingVertical: Spacing.SpaceSemiSmall,
    borderRadius: Spacing.SpaceMedium,
    justifyContent: 'space-between',
  },
});
