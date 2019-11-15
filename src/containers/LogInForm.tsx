import React, { useState, useContext } from "react";
import * as yup from "yup";
import FormTemplate from "../components/Form/Form";
import { ReducerContext } from "../utils/reducer";
import { logIn } from "../utils/asyncFunctions";
import Loader from "../components/Loader/Loader";

const logInSchema = yup.object().shape({
  password: yup
    .string()
    .min(5, "Your password is too short!")
    .required("This field is required!"),
  email: yup
    .string()
    .email("Your email is invalid!")
    .required("This field is required!")
});

const LogInForm = props => {
  const { state, dispatch } = useContext(ReducerContext);
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

  const onSubmit = values => {
    logIn(dispatch, values).then(response => {
      console.log(response);
    });
  };

  return state.isLoading ? (
    <Loader />
  ) : (
    <FormTemplate
      initialValues={initialValues}
      fields={fieldsConfig}
      validationSchema={logInSchema}
      onSubmit={onSubmit}
      successMessage={state.data && `User ${state.data.email} is logged in!`}
      errorMessage={state.isError && `Sorry! Your credentials are incorrect.`}
      {...props}
    />
  );
};

export default LogInForm;
