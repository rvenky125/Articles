export const SET_IS_LOADING = 'SET_USER_DATA';

export const setUserData = userData => dispatch => {
  dispatch({
    type: SET_USER_DATA,
    payload: userData,
  });
};

export const setShowHoldBadge = show => dispatch => {
  dispatch({
    type: SET_SHOW_HOLD_BADGE,
    payload: show,
  });
};

export const setShowNotificationBadge = show => dispatch => {
  dispatch({
    type: SET_SHOW_NOTIFICATION_BADGE,
    payload: show,
  });
};

export const setMenus = menus => dispatch => {
  dispatch({
    type: SET_MENUS,
    payload: menus,
  });
};