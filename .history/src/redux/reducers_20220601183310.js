import {
  SET_MENUS,
  SET_SHOW_HOLD_BADGE,
  SET_SHOW_NOTIFICATION_BADGE,
  SET_USER_DATA,
} from './actions';

const initialState = {
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
};

export default userReducer;
