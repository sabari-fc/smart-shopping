import React from "react";

import { useLocation } from "react-router-dom";

import CartImage from '../images/login.png'



import OTPContainer from "../components/OTPContainer";
import AuthPage from "./AuthPage";

const VerifyOTP = () => {
  const loc = useLocation();
  const phone = loc.state?.phone;

  console.log(`PHONE: ${phone}`);

  return <AuthPage container={<OTPContainer phone={phone} />} image={CartImage} />;
};

export default VerifyOTP;
