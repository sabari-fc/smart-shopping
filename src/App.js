import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  LoginPage,
  RegisterPage,
  ForgotPassPage,
  CheckMailPage,
  SetPasswordPage,
  PasswordResetSuccess,
  AccountCreated,
  VerifyOTP,
  HomePage,
} from "./pages/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassPage />} />
        <Route path="/check-your-mail" element={<CheckMailPage />} />
        <Route path="/set-password" element={<SetPasswordPage />} />
        <Route path="/password-reset" element={<PasswordResetSuccess />} />
        <Route path="/account-created" element={<AccountCreated />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route exact path="/" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
