import { React, useState } from "react";

import { Link } from "react-router-dom";

import CartIllustration from "../images/login.png";
import GoogleIcon from "../icons/icon_google.png";

const LoginForm = () => {
  const [inputValue, setinputValue] = useState("");
  const [showPassField, setshowPassField] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setinputValue(value);
    setshowPassField(/^\S+@\S+\.\S+$/.test(value));
  };
  return (
    <div className="flex flex-row justify-around items-center h-[80vh]">
      <div className="object-contain h-[100%]">
        <img
          src={CartIllustration}
          className="h-[100%] object-contain"
          alt="cart"
        />{" "}
      </div>
      <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit">
        <p className="text-3xl font-bold mb-2">Login</p>
        <p className="text-base text-grey-color mb-8">
          Get access to your Orders, Wishlist and Recommendations
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-4 bg-light-blue rounded-lg mb-6 border text-sm"
          placeholder="Enter Email/Mobile Number"
        />
        {showPassField && (
          <div className="flex flex-col">
            <input
              type="password"
              className="p-4 bg-light-blue rounded-lg mb-4 border text-sm"
              placeholder="Password"
            />
            <Link
              to="/forgot-password"
              className="text-end mb-6 text-xs text-black-color font-bold"
            >
              Forgot password?
            </Link>
          </div>
        )}
        <button className="bg-blue-color text-white font-bold rounded-lg py-3 px-7 mb-4">
          Request OTP
        </button>
        <p className="text-center mb-4 text-grey-color text-xs">Or</p>
        <button className="flex flex-row items-center justify-center border border-stroke-grey rounded-lg py-3 px-7 text-sm font-medium text-black-color mb-12 ">
          <img src={GoogleIcon} alt="google-icon" className="mr-2" />
          Continue with Google
        </button>
        <p className="text-sm text-grey-color mb-10">
          By continuing, you agree to Flipkart's{" "}
          <a
            class="anchor-texts"
            href="https://www.flipkart.com/pages/terms?otracker=undefined_footer_navlinks"
          >
            Terms of Use
          </a>{" "}
          and{" "}
          <a
            class="anchor-texts"
            href="https://www.flipkart.com/pages/privacypolicy?otracker=undefined_footer_navlinks"
          >
            Privacy Policy
          </a>
          .
        </p>
        <p className="text-base text-black-color text-center">
        New to Smart Shopping?{" "}
        <Link to="/register" className="anchor-texts-lg">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
