import { CATCH_ERROR, LOG_IN, INIT_LOGGING } from "./constants";
import {AuthState, AuthActionTypes} from "./types";

export const initialState: AuthState = {
  data: null,
  isLoading: false,
  isError: false
};

export const authReducer = (state: AuthState, action: AuthActionTypes) => {
  switch (action.type) {
    case INIT_LOGGING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: null
      };
    case CATCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: null
      };
    case LOG_IN:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    default:
      return state;
  }
};
