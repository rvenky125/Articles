import axios from 'axios';
import AppColors from '../../theme/Colors';

export const base_url = 'http://local:3101/';
export const headRoute = 'user/';

//Messages
export const defMsg = 'Something went wrong! try again';
export const noInternetMsg =
  'Unable to connect to internet. Make sure you have active network connection!';

//SnackBar actions
export const retryAction = {
  text: 'RETRY',
  textColor: AppColors.brightWhite,
};

export const instance = axios.create({
  baseURL: base_url,
  headers: {'Content-Type': 'application/json', accept: 'application/json'},
});

export default instance;
