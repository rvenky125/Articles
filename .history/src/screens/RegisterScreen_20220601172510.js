import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import {IconButton, useTheme} from 'react-native-paper';
import {AppNavigationNames} from '../AppNavigationNames';
import {CompatibleScroll} from '../components/CompatibleScroll';
import {
  ArrowIconBtnWithText,
  DefButton,
  DefIconButton,
} from '../components/DefButton';
import {DefTextField} from '../components/DefTextField';
import {Spacing} from '../theme/Spacing';
import {typography} from '../theme/Typography';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../util/Constants';
import LottieView from 'lottie-react-native';
import { register } from '../data/apis/register';
import { Toast } from 'react-native-toast-message';

export const RegisterScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {colors} = useTheme();

  const registerPrivateFun = async (full_name, email, city, password) => {
    setIsLoading(true);
    const [result, message] = await register(full_name, email, city, password)
    setIsLoading(false);
    if (message) {
      setTimeout(() => {
        Toast.show({
          type: 
        })
      }, 300)
    }

    if (result) {

    }
  };

  return (
    <View>
      {/* <LottieView source={require('../assets/register.json')} autoPlay loop /> */}
      <View
        style={{
          // backgroundColor: 'rgba(0,0,0,0.4)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <View style={styles.container}>
        <View />
        <View>
          <View
            style={[styles.fieldsContainer, {backgroundColor: colors.card}]}>
            <DefTextField
              icon={'person'}
              value={fullName}
              placeholder={'Full name'}
              onValueChange={value => setFullName(value)}
              style={styles.input}
              backgroundColor={colors.card}
            />
            <DefTextField
              icon={'at'}
              value={email}
              placeholder={'Email'}
              onValueChange={value => setEmail(value)}
              style={styles.input}
              backgroundColor={colors.card}
            />
            <DefTextField
              icon={'at'}
              value={city}
              placeholder={'City'}
              onValueChange={value => setCity(value)}
              style={styles.input}
              backgroundColor={colors.card}
            />
            <DefTextField
              icon={'key'}
              value={password}
              placeholder={'Password'}
              onValueChange={value => setPassword(value)}
              style={styles.input}
              backgroundColor={colors.card}
              secureTextEntry
            />
            <DefTextField
              icon={'key'}
              value={cPassword}
              placeholder={'Confirm Password'}
              onValueChange={value => setCPassword(value)}
              style={[styles.input]}
              backgroundColor={colors.card}
              secureTextEntry
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                fontWeight: 'bold',
                justifyContent: 'space-evenly',
              }}>
              <ArrowIconBtnWithText
                text={'Register'}
                style={{marginTop: Spacing.SpaceMedium}}
                onPress={() => {
                  navigation.navigate(AppNavigationNames.About);
                }}
              />
              {/* <DefButton
                text={'Register'}
                style={{marginVertical: Spacing.SpaceMedium}}
                onPress={() => {
                  navigation.navigate(AppNavigationNames.About);
                }}
              /> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: '100%',
    paddingHorizontal: Spacing.SpaceMedium,
    justifyContent: 'space-between',
  },
  input: {marginVertical: Spacing.SpaceMedium},
  fieldsContainer: {
    padding: Spacing.SpaceMedium,
    borderTopStartRadius: Spacing.SpaceSemiLarge,
    borderTopEndRadius: Spacing.SpaceSemiLarge,
    paddingHorizontal: Spacing.SpaceLarge,
  },
});
