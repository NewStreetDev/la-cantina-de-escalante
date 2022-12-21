import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const loginScheme = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please enter a valid password" })
    .required("Required"),
});

export const createAccountScheme = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  cedula: yup
    .number("Please enter a valid identification")
    .positive("Please enter a valid identification")
    .integer("Please enter a valid identification")
    .required("Required"),
  idEspecialidad: yup.number().positive().integer().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  descripcionPersonal: yup.string().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  dateOfBirth: yup.date().required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});

export const createProductScheme = yup.object().shape({
  Name: yup.string().required("Required"),
  Price: yup.number("Please enter a valid price").positive("Please enter a valid price").integer("Please enter a valid price").required("Required"),
  Description: yup.string().max(500).required("Required"),
  DescriptionEnglish: yup.string().max(500).required("Required"),
  CategoryID: yup.number().integer().positive().required("Required"),
});

export const settingsEmployeeScheme = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  cedula: yup
    .number("Please enter a valid identification")
    .positive("Please enter a valid identification")
    .integer("Please enter a valid identification")
    .required("Required"),
  idEspecialidad: yup.number().positive().integer().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  descripcionPersonal: yup.string().required("Required"),
});

export const settingsUserScheme = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  identification: yup
    .number("Please enter a valid identification")
    .positive("Please enter a valid identification")
    .integer("Please enter a valid identification")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
});

export const newPlanScheme = yup.object().shape({
  name: yup.string().required("Required"),
});

export const createTaskScheme = yup.object().shape({
  description: yup.string().required("Required"),
  Reps: yup
    .number("Please enter a number")
    .positive("Please enter a positive")
    .integer("Please enter a integer")
    .required("Required"),
  Sets: yup
    .number("Please enter a number")
    .positive("Please enter a positive")
    .integer("Please enter a integer")
    .required("Required"),
  Rest: yup
    .number("Please enter a number")
    .positive("Please enter a positive")
    .integer("Please enter a integer")
    .required("Required"),
});


export const ReportsScheme = yup.object().shape({
  initialDate: yup.date().required("Required"),
  finalDate: yup.date().required("Required"),
})