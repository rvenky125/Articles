import {CommonActions, useTheme} from '@react-navigation/native';
import React from 'react';

import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {AppNavigationNames} from '../AppNavigationNames';
import {DefButton} from '../components/DefButton';
import {Spacing} from '../theme/Spacing';
import {SCREEN_HEIGHT} from '../util/Constants';

export const OverviewScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <Image
          source={{
            uri: 'https://artwork.wallartprints.com/media/catalog/category/mountain-pictures.jpg',
          }}
          style={{
            width: Spacing.SpaceLarge * 6,
            height: Spacing.SpaceLarge * 6,
            borderRadius: Spacing.SpaceLarge * 3,
            alignSelf: 'center',
          }}
        />
        <View style={{paddingVertical: Spacing.SpaceLarge}}>
          <Text
            style={{
              fontWeight: '800',
              color: '#717171',
              fontSize: Spacing.SpaceLarge,
              paddingHorizontal: Spacing.SpaceMedium,
            }}>
            Find the source of knowledge for the product you want.
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              paddingTop: Spacing.SpaceSemiSmall,
              color: colors.placeholder,
            }}>
            Solution for who passionate in gaining knowledge.
          </Text>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: Spacing.SpaceLarge * 2,
          marginBottom: Spacing.SpaceLarge,
        }}>
        <DefButton
          text={'Continue'}
          onPress={() => {
            const resetAction = CommonActions.reset({
              index: 0,
              routes: [{name: AppNavigationNames.Categories}],
            });
            navigation.dispatch(resetAction);
            // navigation.navigate(AppNavigationNames.Core);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
