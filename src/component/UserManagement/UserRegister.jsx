import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerPageStyle from "../assets/css/registerPageStyle.css";
import { Formik, Form, Field } from "formik";
import {
  RegisterValidationSchema,
  RegisterInitialValue,
} from "../ValidationSchemaAndIntialValues/index";
import { Register_Url } from "../utiles/ApiCallEndPoints";
import ApiCall from "../utiles/axiosCall";

const UserRegister = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (values) => {
    console.log("values", values);
    // event.preventDefault();
    // Handle registration logic here
    console.log("Registration Submitted");
    const registerUserData = {
      url: Register_Url,
      method: "post",
      data: {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      },
    };
    const registerUserDetails = await ApiCall(registerUserData);
    console.log("registerUserData", registerUserDetails);
    if (registerUserDetails.return_code == "user_add_successfully") {
      // Optionally redirect user after registration
      navigate("/");
    }
  };

  return (
    <div className="register-container">
      <Formik
        initialValues={RegisterInitialValue}
        validationSchema={RegisterValidationSchema}
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
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label htmlFor="fullName">Full Name</label>
            <Field
              name="fullName"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <div className="error-message">{errors.fullName}</div>
            )}

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            {touched.email && errors.email && (
              <div className="error-message">{errors.email}</div>
            )}

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <Field
                name="password"
                type={passwordShown ? "text" : "password"}
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              >
                {passwordShown ? "Hide" : "Show"}
              </button>
            </div>
            {touched.password && errors.password && (
              <div className="error-message">{errors.password}</div>
            )}

            <button className="submit_button" type="submit">
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserRegister;
