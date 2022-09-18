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
    default:
      return state;
  }
};

export default userReducer;
