import {CATCH_ERROR, INIT_LOGGING, LOG_IN} from "./constants";

export const initLogging = () => ({
  type: INIT_LOGGING
});

export const catchError = error => ({
  type: CATCH_ERROR,
  error
});

export const logInAction = data => ({
  type: LOG_IN,
  payload: data
});
