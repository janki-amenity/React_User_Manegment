import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginPageStyle from "../assets/css/loginPageStyle.css";
import { Formik, Form, Field } from "formik";
import {
  LoginValidationSchema,
  LoginInitialValue,
} from "../ValidationSchemaAndIntialValues/index";
import { Login_Url } from "../utiles/ApiCallEndPoints";
import ApiCall from "../utiles/axiosCall";

const UserLogin = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (values) => {
    // Handle login logic here
    console.log("Login Submitted", values);
    const loginData = {
      url: Login_Url,
      method: "post",
      data: {
        email: values.email,
        password: values.password,
      },
    };
    const loginDetails = await ApiCall(loginData);
    console.log("loginDetails", loginDetails);
    if (loginDetails.return_code == "user_login_successfully") {
      localStorage.setItem("authorization", loginDetails.jwtToken);
      // Optionally redirect user after registration
      navigate("/user-data");
    }

    // After login logic, you can redirect or do other actions
    // navigate("/dashboard"); // redirect to dashboard, for example
  };

  const handleRegisterRedirect = () => {
    navigate("/signup");
  };
  return (
    <div className="login-container">
      <Formik
        initialValues={LoginInitialValue}
        validationSchema={LoginValidationSchema}
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
            <h2>Login</h2>
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

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <Field
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
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
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <button onClick={handleRegisterRedirect}>Register here</button>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserLogin;
