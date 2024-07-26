import * as Yup from "yup";

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export const LoginInitialValue = {
  email: "",
  password: "",
};

export const RegisterValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export const RegisterInitialValue = {
  fullName: "",
  email: "",
  password: "",
};

export const ForgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const ForgotPasswordInitialValue = Yup.object().shape({
  email: "",
});
