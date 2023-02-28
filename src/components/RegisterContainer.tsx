import { useState } from "react";
import {
  Link,
  Navigate,
  NavigateFunction,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

import credType from "../interfaces/CredType";

const googleIcon: string = require("../icons/google.svg").default;

const RegisterContainer = () => {
  const cred: credType = useOutletContext();
  const navigate: NavigateFunction = useNavigate();

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

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (cred.creds.email !== "") {
      // cred.setCreds({
      //   ...cred.creds,
      //   loggedIn: "true",
      // });

      storage.setItem("isLoggedIn", "true");
      setAuthenticated(storage.getItem("loggedIn"));

      navigate("/", {
        replace: true,
      });
    }
    if (cred.creds.phone !== "") {
      window.localStorage.setItem("isLoggedIn", "true");
      navigate("verify-otp");
    }
  };

  return (
    <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit">
      <p className="text-3xl font-bold mb-2">Register</p>
      <p className="text-base text-grey-color mb-8">
        Join now to access exclusive deals and seamless shopping.
      </p>
      <form
        name="register-form"
        className="flex flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={cred.creds.name}
          onChange={(e) =>
            cred.setCreds({
              ...cred.creds,
              name: e.target.value,
            })
          }
          className="p-4 bg-light-blue rounded-lg mb-4 border text-sm"
          placeholder="Full Name"
        />
        <input
          type="text"
          value={cred.creds.input.emailPhone}
          onChange={handleInputChange}
          className="p-4 bg-light-blue rounded-lg mb-4 border text-sm"
          placeholder="Enter Email/Mobile Number"
        />
        {cred.creds.email !== "" && (
          <input
            type="password"
            className="p-4 bg-light-blue rounded-lg mb-4 border text-sm"
            placeholder="Password"
          />
        )}
      </form>

      <button
        className="bg-blue-color w-full text-white font-bold rounded-lg py-3 px-7 mb-4"
        onClick={handleRegister}
      >
        {cred.creds.email !== "" ? "Create Account" : "Request OTP"}
      </button>

      {authenticated === "true" && <Navigate to="/" />}

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
        Already have an account?{" "}
        <Link to="/login" className="anchor-texts-lg">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterContainer;
