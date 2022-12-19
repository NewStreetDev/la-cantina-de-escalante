import React, { useContext } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginProvider";
import { loginScheme } from "../../schemas";
import { Toaster, toast } from "react-hot-toast";
import CustomInput from "../../components/CustomInput";

function login() {
  const { VerificarLogin } = useLogin();
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  return (
    <ContentPage>
      <h1 className="titleSection">Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginScheme}
        enableReinitialize={true}
        onSubmit={async (values) => {
          const response = await VerificarLogin(values.email, values.password);
          if (!response) {
            toast.error("No existe la cuenta", {
              position: "bottom-center",
              autoClose: 3000,
            });
          } else {
            // console.log(response)
            dispatch({ type: "LOGIN", payload: response });
            navigate("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Write your email"
            />

            <CustomInput label="Password" name="password" type="password" />

            <button className="button" type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </ContentPage>
  );
}

export default login;

const ContentPage = styled.article`
  padding: 80px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1{
    color: #000;
  }
`;
