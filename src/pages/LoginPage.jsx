import React from "react";

import LoginForm from "../components/LoginForm";

import CartImage from '../images/login.png'


import AuthPage from "./AuthPage";


const LoginPage = () => {
  return (
    <AuthPage container={<LoginForm />} image={CartImage} />
  );
};

export default LoginPage;
