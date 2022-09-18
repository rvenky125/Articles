import instance, {defMsg, headRoute, noInternetMsg} from '../ApiConfig';
import NetInfo from '@react-native-community/netinfo';
// import md5 from 'md5';

export const getProductHtmlText = async (product_id) => {
  console.log('login request' + product_id);
  const state = await NetInfo.fetch();
  if (!state.isInternetReachable) {
    return [null, noInternetMsg];
  }
  try {
    let response = await instance.post('getProductHtml', {
      full_name: full_name.trim(),
      email: email.trim(),
      city: city.trim(),
      password: password.trim(),
      //   device_token: device_token,
      //   device_unique_id: device_unique_id,
      //   device_type: device_type,
      //   version_no: version_no,
    });
    return [response.data, null];
  } catch (e) {
    const response = e.response;
    console.log(e);
    if (response?.status && response?.data?.errMessage) {
      return [null, response.data.errMessage];
    } else {
      return [null, defMsg];
    }
  }
};
