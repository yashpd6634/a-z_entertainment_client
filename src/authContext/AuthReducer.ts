import { Reducer } from "react";
import { UserOutput } from "./AuthActions";
import { AuthState } from "./AuthContext";

export interface ActionType {
  type: string;
  payload?: UserOutput;
}

export const AuthReducer: Reducer<AuthState, ActionType> = (state: AuthState, action: ActionType) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
      case "LOGOUT":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
    default:
      return { ...state };
  }
};
