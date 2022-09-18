import axios from 'axios';

export const base_url = 'http://192.168.43.17:8080/';
export const headRoute = 'user/';

//Messages
export const defMsg = 'Something went wrong! try again';
export const noInternetMsg =
  'Unable to connect to internet. Make sure you have active network connection!';

//SnackBar actions
// export const retryAction = {
//   text: 'RETRY',
//   textColor: AppColors.brightWhite,
// };

export const instance = axios.create({
  baseURL: base_url,
  headers: {'Content-Type': 'application/json', accept: 'application/json'},
});

export default instance;
