import React, { FunctionComponent } from "react";
import { ErrorMessage, Form, Formik } from "formik";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormStyles } from "./useFormStyles";
import { FormValues, FormFields, ValidationSchema } from "./types";

type FormProps = {
  successMessage?: string;
  errorMessage?: string;
  initialValues: FormValues;
  fields: FormFields[];
  validationSchema: ValidationSchema;
  onSubmit: Function;
};

const FormTemplate: FunctionComponent<FormProps> = props => {
  const {
    initialValues,
    fields,
    validationSchema,
    onSubmit,
    successMessage,
    errorMessage
  } = props;

  const classes = useFormStyles();

  return successMessage ? (
    <p>{successMessage}</p>
  ) : (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={values => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ status, isSubmitting, values, handleChange, handleBlur }) => (
          <Form className={classes.form}>
            {fields.map(field => (
              <React.Fragment key={`${field.id}fragment`}>
                <TextField
                  key={field.id}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
      </Formik>
      {errorMessage && <p>{errorMessage}</p>}
    </React.Fragment>
  );
};

export default FormTemplate;
