import React from "react";
import {
  ForgotPasswordInitialValue,
  ForgotPasswordValidationSchema,
} from "../ValidationSchemaAndIntialValues";
import { Formik, Field } from "formik";
import forgotPasswordStyle from "../assets/css/forgotPasswordStyle.css";

const UserForgotPassword = () => {
  const handleSubmit = (values) => {
    console.log("Forgot Password", values);
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={ForgotPasswordInitialValue}
        validationSchema={ForgotPasswordValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className="error-message">{errors.email}</div>
            )}

            <button className="submit_button" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserForgotPassword;
