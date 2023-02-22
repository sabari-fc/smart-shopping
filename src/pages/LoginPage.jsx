import React from "react";

import LoginForm from "../components/LoginForm";

import ShopLogo from "../images/logo.svg";


const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen overscroll-contain fixed top-0 bottom-0 left-0 right-0">
      <div className="max-h-[20vh]">
        <img src={ShopLogo} alt="logo" width="150px" className="mx-12 mt-12" />
      </div>

      <LoginForm />
      
    </div>
  );
};

export default LoginPage;
