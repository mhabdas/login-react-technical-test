import { catchError, initLogging, logInAction } from "./actions";
import { AUTH_API_SUCCESS, AUTH_API_ERROR } from "./constants";
import axios from "axios";
import { AuthActionTypes, AuthData } from "./types";
import { Dispatch } from "react";

const apiURLs = [AUTH_API_ERROR, AUTH_API_SUCCESS];

export const logIn = async (
  dispatch: Dispatch<AuthActionTypes>,
  data: AuthData
) => {
  dispatch(initLogging());
  try {
    await axios.put(apiURLs[Math.floor(Math.random() * apiURLs.length)], data);
    dispatch(logInAction(data));
  } catch (error) {
    dispatch(catchError(error));
  }
};
