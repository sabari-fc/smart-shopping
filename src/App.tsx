import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AccountCreatedContainer from "./components/AccountCreatedContainer";
import CheckMailContainer from "./components/CheckMailContainer";
import ForgotPassContainer from "./components/ForgotPassContainer";
import LoginContainer from "./components/LoginContainer";
import OTPContainer from "./components/OTPContainer";
import RegisterContainer from "./components/RegisterContainer";

import AuthLayout from "./layouts/AuthLayout";
import HomePageLayout from "./layouts/HomePageLayout";
import HomePage from "./pages/HomePage";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<AuthLayout />}>
          <Route index element={<LoginContainer />} />
          <Route path="verify-otp" element={<OTPContainer />} />
        </Route>
        <Route path="forgot-password" element={<AuthLayout />}>
          <Route index element={<ForgotPassContainer />} />
          <Route path="check-your-mail" element={<CheckMailContainer />} />
        </Route>
        <Route path="register" element={<AuthLayout />}>
          <Route index element={<RegisterContainer />} />
          <Route path="verify-otp" element={<OTPContainer />} />
          <Route path="account-created" element={<AccountCreatedContainer />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
