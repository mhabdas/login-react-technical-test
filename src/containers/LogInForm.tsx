import React, { useState, useReducer } from "react";
import * as yup from "yup";
import FormTemplate from "../components/Form/Form";
import { authReducer, initialState } from "../utils/reducer";
import { logIn } from "../utils/asyncFunctions";
import Loader from "../components/Loader/Loader";
import { AuthData } from "../utils/types";

export const logInSchema = yup.object().shape({
  password: yup
    .string()
    .min(5, "Your password is too short!")
    .required("This field is required!"),
  email: yup
    .string()
    .email("Your email is invalid!")
    .required("This field is required!")
});

const LogInForm = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [initialValues] = useState({
    email: "",
    password: ""
  });

  const fieldsConfig = [
    { type: "text", name: "email", placeholder: "Email", id: 1 },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      id: 2
    }
  ];

  const onSubmit = (values: AuthData) => {
    logIn(dispatch, values);
  };

  return state.isLoading ? (
    <Loader />
  ) : (
    <FormTemplate
      initialValues={initialValues}
      fields={fieldsConfig}
      validationSchema={logInSchema}
      onSubmit={onSubmit}
      successMessage={
        state.data ? `User ${state.data.email} is logged in!` : undefined
      }
      errorMessage={
        state.isError ? `Sorry! Your credentials are incorrect.` : undefined
      }
    />
  );
};

export default LogInForm;
