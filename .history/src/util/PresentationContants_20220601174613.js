import Toast from 'react-native-toast-message';
import AppColors from '../theme/Colors';

// export const tabBarStyle = {
//     borderTopLeftRadius: 25,
//     borderTopEndRadius: 25,
//     height: 70,
//     elevation: 20,
//     borderStartWidth: 1.5,
//     borderEndWidth: 1.5,
//     borderTopWidth: 1,
//     borderTopColor: AppColors.border,
//     borderColor: AppColors.border,
//     //position: 'absolute',
// };

expory default function showInfoToast(text1, text2) {
  Toast.show({type: 'info', text1: text1, text2: text2});
}

function showSuccessToast(text1, text2) {
  Toast.show({type: 'success', text1: text1, text2: text2});
}

function showErrorToast(text1, text2) {
  Toast.show({type: 'error', text1: text1, text2: text2});
}
