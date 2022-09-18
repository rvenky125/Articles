export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setIsLoading = 'SET_IS_LOADING';isLoading => dispatch => {
  dispatch({
    type: SET_IS_LOADING,
    payload: isLoading,
  });
};
