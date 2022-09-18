export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setIsLoading = isLoading => dispatch => {
  dispatch({
    type: SET_IS_LOADING,
    payload: isLoading,
  });
};
