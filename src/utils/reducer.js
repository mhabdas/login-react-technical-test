import React, { useReducer } from "react";
import {CATCH_ERROR, LOG_IN, INIT_LOGGING} from "./constants";

const initialState = {
  data: null,
  isLoading: false,
  isError: false
};

const authReducer = (state, action) => {
  switch (action.type) {
    case INIT_LOGGING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: null,
      };
    case CATCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: null,
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
const ReducerProvider = props => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { children } = props;
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
export { ReducerContext, ReducerProvider };
