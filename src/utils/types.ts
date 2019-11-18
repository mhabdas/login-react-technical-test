import { CATCH_ERROR, INIT_LOGGING, LOG_IN } from "./constants";

export interface AuthData {
  [email: string]: string;
  password: string;
}

export interface AuthState {
  data: AuthData | null;
  isLoading: boolean;
  isError: boolean;
}

interface InitLoggingAction {
  type: typeof INIT_LOGGING;
  payload: null;
}

interface CatchErrorAction {
  type: typeof CATCH_ERROR;
  payload: null;
}

interface LogInAction {
  type: typeof LOG_IN;
  payload: AuthData;
}

export type AuthActionTypes = LogInAction | InitLoggingAction | CatchErrorAction;

export type ReducerProps = {};
