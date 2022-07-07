import { AnyAction } from "redux";

import {
  signInError,
  signUpError,
  signOutError,
  signInSuccess,
  signOutSuccess,
} from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload, isLoading: false };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (
    signInError.match(action) ||
    signUpError.match(action) ||
    signOutError.match(action)
  ) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
};
