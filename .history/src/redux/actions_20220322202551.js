export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_MENUS = 'SET_MENUS';
export const SET_SHOW_HOLD_BADGE = 'SET_HOLD_SHOW_BADGE';
export const SET_SHOW_NOTIFICATION_BADGE = 'SET_SHOW_NOTIFICATION_BADGE'

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