import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";

import ShopLogo from "../images/logo.svg";
import CartImage from "../images/login.png";
import RegisterImage from "../images/register.png";

import ForgotPassContainer from "../components/ForgotPassContainer";
import OTPContainer from "../components/OTPContainer";
import CheckMailContainer from "../components/CheckMailContainer";
import RegisterContainer from "../components/RegisterContainer";
import AccountCreatedContainer from "../components/AccountCreatedContainer";
import SetPasswordContainer from "../components/SetPasswordContainer";
import ResetSuccessContainer from "../components/ResetSuccessContainer";

const AuthPage = () => {
  const loc = useLocation();
  console.log(loc.pathname);

  const [image, setImage] = useState(CartImage);

  const renderContainer = () => {
    switch (loc.pathname) {
      case "/login":
        return <LoginForm />;
      case "/forgot-password":
        return <ForgotPassContainer />;
      case "/verify-otp":
        return <OTPContainer />;
      case "/check-mail":
        return <CheckMailContainer />;

      case "/register":
        setImage(RegisterImage);
        return <RegisterContainer />;

      case "/account-created":
        setImage(RegisterImage);
        return <AccountCreatedContainer />;

      case "/set-password":
        return <SetPasswordContainer />;

      case "/reset-success":
        return <ResetSuccessContainer />;

      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col h-screen overscroll-contain fixed top-0 bottom-0 right-0 left-0 px-[60px] py-12">
      <div className="max-h-[20vh]">
        <img src={ShopLogo} alt="logo" width="150px" />
      </div>

      <div className="flex flex-row justify-around items-center h-[80vh] ">
        <div className="object-contain h-[90%]">
          <img src={image} className="h-[100%] object-contain" alt="cart" />
        </div>
        {renderContainer()}
      </div>
    </div>
  );
};

export default AuthPage;
