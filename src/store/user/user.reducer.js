import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, isLoading: false };
    case USER_ACTION_TYPES.SIGN_IN_ERROR:
    case USER_ACTION_TYPES.SIGN_UP_ERROR:
    case USER_ACTION_TYPES.SIGN_OUT_ERROR: {
      return { ...state, error: payload, isLoading: false };
    }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return { ...state, currentUser: null };
    }
    default:
      return state;
  }
};
