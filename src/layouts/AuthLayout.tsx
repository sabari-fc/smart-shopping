import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const shopLogo: string = require("../images/logo.svg").default;
const cartImage: string = require("../images/login.svg").default;
const registerImage: string = require("../images/register.svg").default;

export const AuthLayout = () => {
  const [creds, setCreds] = useState({
    input: {
      emailPhone: "",
      password: "",
      otp: "",
    },
    email: "",
    phone: "",
    isRegister: false,
    loggedIn: window.localStorage.getItem("isLoggedIn") === null && false,
  });

  return (
    <div className="flex flex-col h-screen overscroll-contain fixed top-0 bottom-0 right-0 left-0 px-[60px] py-12">
      <div className="max-h-[20vh]">
        <img src={shopLogo} alt="logo" width="150px" />
      </div>

      <div className="flex flex-row justify-around items-center h-[80vh] ">
        <div className="object-contain h-[90%]">
          <img
            src={creds.isRegister ? registerImage : cartImage}
            className="h-[100%] object-contain"
            alt="cart"
          />
        </div>
        <Outlet context={{ creds, setCreds }} />
      </div>
    </div>
  );
};

export default AuthLayout;
