import React from "react";
import { ErrorMessage, Form, Formik } from "formik";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormStyles } from "./useFormStyles";

const FormTemplate = props => {
  const { initialValues, fields, validationSchema, onSubmit } = props;

  const classes = useFormStyles();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => onSubmit(values)}
      validationSchema={validationSchema}
      render={({ status, isSubmitting }) => (
        <Form className={classes.form}>
          {fields.map(field => (
            <React.Fragment>
              <label key={`${field.id}label`} htmlFor={field.name}>
                {field.label}
              </label>
              <TextField
                key={field.id}
                type={field.type}
                name={field.name}
                component={field.component}
                placeholder={field.placeholder}
              />
              <ErrorMessage
                key={`${field.id}error`}
                name={field.name}
                component="div"
                className={classes.error}
              />
            </React.Fragment>
          ))}
          {status && status.msg && <div>{status.msg}</div>}
          <Button
            type="submit"
            color="secondary"
            disabled={isSubmitting}
            variant="contained"
          >
            Log In
          </Button>
        </Form>
      )}
    />
  );
};

export default FormTemplate;
