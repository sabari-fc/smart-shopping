import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoogleIcon from "../icons/icon_google.png";

const RegisterContainer = () => {
  const [fullName, setfullName] = useState("");
  const [phoneEmail, setphoneEmail] = useState("");
  const [showPass, setshowPass] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setphoneEmail(value);
    setshowPass(/^\S+@\S+\.\S+$/.test(value));
    console.log(`VALUE: ${value}`);
  };
  return (
    <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit">
      <p className="text-3xl font-bold mb-2">Register</p>
      <p className="text-base text-grey-color mb-8">
        Join now to access exclusive deals and seamless shopping.
      </p>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setfullName(e.target.value)}
        className="p-4 bg-light-blue rounded-lg mb-4 border text-sm"
        placeholder="Full Name"
      />
      <input
        type="text"
        value={phoneEmail}
        onChange={handleInputChange}
        className="p-4 bg-light-blue rounded-lg mb-4 border text-sm"
        placeholder="Enter Email/Mobile Number"
      />
      {showPass && (
        <input
          type="password"
          className="p-4 bg-light-blue rounded-lg mb-4 border text-sm"
          placeholder="Password"
        />
      )}

      <Link to="/verify-otp">
        <button className="bg-blue-color w-full text-white font-bold rounded-lg py-3 px-7 mb-4">
          Request OTP
        </button>
      </Link>

      <p className="text-center mb-4 text-grey-color text-xs">Or</p>
      <button className="flex flex-row items-center justify-center border border-stroke-grey rounded-lg py-3 px-7 text-sm font-medium text-black-color mb-12 ">
        <img src={GoogleIcon} alt="google-icon" className="mr-2" />
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
