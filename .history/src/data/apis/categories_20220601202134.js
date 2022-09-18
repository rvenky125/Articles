import instance, {defMsg, headRoute, noInternetMsg} from '../ApiConfig';
import NetInfo from '@react-native-community/netinfo';
// import md5 from 'md5';

export const getCategories = async () => {
  const state = await NetInfo.fetch();
  if (!state.isInternetReachable) {
    return [null, noInternetMsg];
  }
  try {
    let response = await instance.get('categories/list');
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


export const getProducts = async () => {
    const state = await NetInfo.fetch();
    if (!state.isInternetReachable) {
      return [null, noInternetMsg];
    }
    try {
      let response = await instance.get('products/list', {id: });
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