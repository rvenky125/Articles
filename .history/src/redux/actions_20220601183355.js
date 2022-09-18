export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setUserData = isLoading => dispatch => {
  dispatch({
    type: SET_IS_LOADING,
    payload: userData,
  });
};