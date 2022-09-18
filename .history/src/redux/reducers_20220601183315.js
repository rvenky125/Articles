import {
  SET_MENUS,
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
