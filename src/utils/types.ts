import { CATCH_ERROR, INIT_LOGGING, LOG_IN } from "./constants";

export interface AuthData {
  email: string;
  password: string;
}

export interface AuthState {
  data: AuthData[] | null;
  isLoading: boolean;
  isError: boolean;
}

interface InitLoggingAction {
  type: typeof INIT_LOGGING;
}

interface CatchErrorAction {
  type: typeof CATCH_ERROR;
}

interface LogInAction {
  type: typeof LOG_IN;
  payload: AuthData[];
}

export type AuthActionTypes =
  | InitLoggingAction
  | CatchErrorAction
  | LogInAction;

export type ReducerProps = {};
