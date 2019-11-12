import React, { useState } from "react";
import * as yup from "yup";
import FormTemplate from "../../components/Form/Form";

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
  const [initialValues] = useState({
    email: "",
    password: ""
  });

  const fieldsConfig = [
    { type: "text", name: "email", placeholder: "Email" },
    { type: "password", name: "password", placeholder: "Password" }
  ];

  const onSuccessAction = () => {};

  return (
    <FormTemplate
      initialValues={initialValues}
      fields={fieldsConfig}
      validationSchema={logInSchema}
      onSuccessAction={onSuccessAction}
      {...props}
    />
  );
};

export default LogInForm;
