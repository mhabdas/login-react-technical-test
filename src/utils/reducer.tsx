import React, { FunctionComponent, useReducer } from "react";
import { CATCH_ERROR, LOG_IN, INIT_LOGGING } from "./constants";
import { AuthState, AuthActionTypes, ReducerProps } from "./types";

const initialState: AuthState = {
  data: null,
  isLoading: false,
  isError: false
};

const authReducer = (state: AuthState, action: AuthActionTypes) => {
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

const ReducerContext = React.createContext(initialState);
const ReducerProvider: FunctionComponent<ReducerProps> = props => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { children } = props;
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
export { ReducerContext, ReducerProvider };
