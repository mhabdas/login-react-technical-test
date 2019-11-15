import { catchError, initLogging, logInAction } from "./actions";
import { AUTH_API_SUCCESS, AUTH_API_ERROR } from "./constants";
import axios from "axios";

const apiURLs = [AUTH_API_ERROR, AUTH_API_SUCCESS];

export const logIn = async (dispatch, data) => {
  dispatch(initLogging());
  try {
    await axios({
      method: "PUT",
      mode: "no-cors",
      url: apiURLs[Math.floor(Math.random() * apiURLs.length)],
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data
    });
    dispatch(logInAction(data));
  } catch (error) {
    dispatch(catchError(error));
  }
};
