import instance, {defMsg, headRoute, noInternetMsg} from '../ApiConfig';
import NetInfo from '@react-native-community/netinfo';
// import md5 from 'md5';

export const register = async (
  full_name,
  email,
  city,
  password,
) => {
  console.log(
    'login request' + 
    full_name,
    email,
    city,
    password
  );
  const state = await NetInfo.fetch();
  if (!state.isInternetReachable) {
    return [null, noInternetMsg];
  }
  try {
    let response = await instance.post(headRoute + 'register', {
      full_name: username.trim(),
      email: email.trim(),
      city: city.trim(),
      password: password.trim()
    //   device_token: device_token,
    //   device_unique_id: device_unique_id,
    //   device_type: device_type,
    //   version_no: version_no,
    });
    return [response.data, null];
  } catch (e) {
    const response = e.response;
    if (response?.status && response?.data?.errMessage) {
      return [null, response.data.errMessage];
    } else {
      return [null, defMsg];
    }
  }
};
