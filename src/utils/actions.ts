import { CATCH_ERROR, INIT_LOGGING, LOG_IN } from "./constants";
import { AuthData } from "./types";

export const initLogging = () => ({
  type: INIT_LOGGING
});

export const catchError = (error: Error) => ({
  type: CATCH_ERROR,
  error
});

export const logInAction = (data: AuthData) => ({
  type: LOG_IN,
  payload: data
});
