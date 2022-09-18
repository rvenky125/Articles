import React from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import AppColors from '../theme/Colors';

export const ModalLoader = props => {
  const {
    show = false,
    backgroundColor = AppColors.brightWhite,
    dimLights = 0.4,
  } = props;
  const {colors} = useTh
  return (
    <Modal transparent={true} animationType="none" visible={show}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `rgba(0,0,0,${dimLights})`,
        }}>
        <ActivityIndicator animating={show} color={color} size="large" />
        {/* <View
          style={{
            padding: 13,
            backgroundColor: `${backgroundColor}`,
            borderRadius: 13,
          }}>
        </View> */}
      </View>
    </Modal>
  );
};
