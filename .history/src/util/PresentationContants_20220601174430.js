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

function showInfoMessage(text1, text2) {
  Toast.show({type: 'info', text1: text1, text2: text2});
}
