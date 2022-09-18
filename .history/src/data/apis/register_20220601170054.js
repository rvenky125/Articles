import instance, {defMsg, headRoute, noInternetMsg} from '../ApiConfig';
import NetInfo from '@react-native-community/netinfo';
// import md5 from 'md5';

export const signIn = async (
  username,
  password,
  device_token,
  device_unique_id,
  device_type,
  version_no,
) => {
  console.log(
    'login request' + username,
    password,
    device_token,
    device_unique_id,
    device_type,
    version_no,
  );
  const state = await NetInfo.fetch();
  if (!state.isInternetReachable) {
    return [null, noInternetMsg];
  }
  try {
    let response = await instance.post(headRoute + 'auth/signin/', {
      username: username.trim(),
      password: md5(password.trim()),
      device_token: device_token,
      device_unique_id: device_unique_id,
      device_type: device_type,
      version_no: version_no,
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
