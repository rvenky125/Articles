export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setUserData = userData => dispatch => {
  dispatch({
    type: SET_USER_DATA,
    payload: userData,
  });
};