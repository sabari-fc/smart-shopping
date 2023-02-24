import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthPage, HomePage } from "./pages/pages";

const App = () => {
  const createBrowserRoot = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "login",
      element: <AuthPage />,
    },
    {
      path: "verify-otp",
      element: <AuthPage />,
    },
    {
      path: "forgot-password",
      element: <AuthPage />,
    },
    {
      path: "check-mail",
      element: <AuthPage />,
    },
    {
      path: "register",
      element: <AuthPage />,
    },
    {
      path: "set-password",
      element: <AuthPage />,
    },
    {
      path: "reset-success",
      element: <AuthPage />,
    },
    {
      path: "account-created",
      element: <AuthPage />,
    },
  ]);

  return <RouterProvider router={createBrowserRoot} />;
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/register" element={<RegisterPage />} />
  //       {/* <Route path="/forgot-password" element={<ForgotPassPage />} />
  //       <Route path="/check-your-mail" element={<CheckMailPage />} />
  //       <Route path="/set-password" element={<SetPasswordPage />} />
  //       <Route path="/password-reset" element={<PasswordResetSuccess />} /> */}
  //       {/* <Route path="/account-created" element={<AccountCreated />} /> */}
  //       {/* <Route path="/verify-otp" element={<VerifyOTP />} /> */}
  //       {/* <Route exact path="/" element={<HomePage />} /> */}
  //     </Routes>
  //   </BrowserRouter>
  // );
};

export default App;
