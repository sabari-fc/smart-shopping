import { useState } from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

import credType from "../interfaces/CredType";

const googleIcon: string = require("../icons/google.svg").default;

const LoginContainer = () => {
  const cred: credType = useOutletContext();
  const navigate = useNavigate();
  const storage = window.localStorage;

  const [authenticated, setAuthenticated] = useState(
    storage.getItem("loggedIn")
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inp = event.target;
    cred.setCreds({
      ...cred.creds,

      input: {
        ...cred.creds.input,

        emailPhone: inp.value,
      },
      phone: inp.value.trim().match(/^(\+?)(\d{10,13})$/s)
        ? inp.value.trim()
        : "",
      email: inp.value
        .trim()
        .match(/^([\w\d.+_\-~]+)@([\d\w-]+\.[\d\w]{2,3})$/s)
        ? inp.value.trim()
        : "",
    });
  };

  const login = () => {
    storage.setItem("loggedIn", "true");
    // cred.setCreds({
    //   ...cred.creds,
    //   loggedIn: "true",
    // });
    setAuthenticated("true");
    navigate("/");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inp = event.target;
    cred.setCreds({
      ...cred.creds,
      input: {
        ...cred.creds.input,
        password: inp.value,
      },
    });
  };

  return (
    <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit">
      <p className="text-3xl font-bold mb-2">Login</p>
      <p className="text-base text-grey-color mb-8">
        Get access to your Orders, Wishlist and Recommendations
      </p>
      <form
        name="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (cred.creds.email !== "") login();
          else navigate("verify-otp");
        }}
      >
        {authenticated === "true" && <Navigate to="/" replace={true} />}

        <input
          type="text"
          value={cred.creds.input.emailPhone}
          onChange={handleInputChange}
          className="p-4 bg-light-blue rounded-lg mb-6 border text-sm w-full"
          placeholder="Enter Email/Mobile Number"
        />
        {cred.creds.email !== "" && (
          <div className="flex flex-col">
            <input
              type="password"
              className="p-4 bg-light-blue rounded-lg mb-4 border text-sm"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <Link
              to="/forgot-password"
              className="text-end mb-6 text-xs text-black-color font-bold"
            >
              Forgot password?
            </Link>
          </div>
        )}

        {/* <Link to={cred.creds.email !== "" ? "/" : "verify-otp"}> */}
        <input
          type="submit"
          className="bg-blue-color w-full text-white font-bold rounded-lg py-3 px-7 mb-4 cursor-pointer"
          value={cred.creds.email !== "" ? "Login" : "Request OTP"}
        />
        {/* </Link> */}
      </form>
      <p className="text-center mb-4 text-grey-color text-xs">Or</p>
      <button className="flex flex-row items-center justify-center border border-stroke-grey rounded-lg py-3 px-7 text-sm font-medium text-black-color mb-12 ">
        <img src={googleIcon} alt="google-icon" className="mr-2" />
        Continue with Google
      </button>
      <p className="text-sm text-grey-color mb-10">
        By continuing, you agree to Flipkart's{" "}
        <a
          className="anchor-texts"
          href="https://www.flipkart.com/pages/terms?otracker=undefined_footer_navlinks"
        >
          Terms of Use
        </a>{" "}
        and{" "}
        <a
          className="anchor-texts"
          href="https://www.flipkart.com/pages/privacypolicy?otracker=undefined_footer_navlinks"
        >
          Privacy Policy
        </a>
        .
      </p>
      <p className="text-base text-black-color text-center">
        New to Smart Shopping?{" "}
        <Link to="/register" className="anchor-texts-lg">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginContainer;
