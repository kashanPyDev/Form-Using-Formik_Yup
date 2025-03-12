import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(5).max(20).required("Please enter Your Name"),
  email: Yup.string().email().required("Please enter a valid email"),
  password: Yup.string()
    .min(4)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Password must contain at least one letter and one number"
    ).required("Please enter a strong password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], "Password must match")
});













export const signUpSchema1 = Yup.object({
  name: Yup.string().min(5).required('Please enter your name first'),
  email: Yup.string().email().min(8).required('Please enter your email first'),
  password: Yup.string().min(5).required('Please enter your password first'),
  confirmPassword: Yup.string()
    .required('Please enter your password first')
    .oneOf([Yup.ref('password'), null], " password must match")
});
