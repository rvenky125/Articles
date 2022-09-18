import {
  SET_MENUS,
  SET_SHOW_HOLD_BADGE,
  SET_SHOW_NOTIFICATION_BADGE,
  SET_USER_DATA,
} from './actions';

const initialState = {
  userData: {},
  showHoldBadge: false,
  menus: [],
  showNotificationBadge: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, userData: action.payload};
    case SET_SHOW_HOLD_BADGE:
      return {...state, showHoldBadge: action.payload};
    case SET_SHOW_NOTIFICATION_BADGE:
      return {...state, showNotificationBadge: action.payload};
    case SET_MENUS:
      return {...state, menus: action.payload};
    default:
      return state;
  }
};

export default userReducer;
