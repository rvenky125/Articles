import instance, {defMsg, headRoute, noInternetMsg} from '../ApiConfig';
import NetInfo from '@react-native-community/netinfo';
// import md5 from 'md5';

export const getHtmlText = async (product_id) => {
  console.log('login request' + product_id);
  const state = await NetInfo.fetch();
  if (!state.isInternetReachable) {
    return [null, noInternetMsg];
  }
  try {
    let response = await instance.get('products/html_text', {
      product_id: product_id
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
