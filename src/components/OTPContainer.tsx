import React, { useEffect } from "react";
import { Link, Navigate, useOutletContext } from "react-router-dom";
import { OTP_LENGTH } from "../constants/constants";
import credType from "../interfaces/CredType";
import ClickableText from "./ClickableText";
import OtpTextField from "./OtpTextField";

const OTPContainer = () => {
  const cred: credType = useOutletContext();
  const storage = window.localStorage;

  useEffect(() => {
    if (cred.creds.loggedIn === "true") {
      loginUser();
    }
  });

  const loginUser = () => {
    storage.setItem("loggedIn", "true");
    cred.setCreds({
      ...cred.creds,
      loggedIn: "true",
    });
  };

  const handlePaste = (value: string) => {
    console.log(`Pasted value: ${value}`);
  };

  const handleBackspace = (index: number) => {
    console.log(`Backspace pressed on index: ${index}`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (cred.creds.input.otp !== "") {
      loginUser();
    } else alert("Please enter the OTP.");
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl h-fit shadow-lg px-12 py-8 gap-[20vh]">
      {cred.creds.loggedIn === "true" && <Navigate to="/" replace={true} />}

      <form onSubmit={handleSubmit}>
        <p className="mb-2 font-bold text-3xl">Enter OTP</p>
        <span className="text-base text-grey-color mb-8">
          Please enter the OTP sent to{" "}
          <span className="font-bold text-grey-color">{cred.creds.phone}</span>.{" "}
          <Link to="/login" className="anchor-texts-lg">
            Change
          </Link>
        </span>
        <OtpTextField
          numInputs={OTP_LENGTH}
          onPaste={handlePaste}
          onBackspace={handleBackspace}
        />
        {/* <Link to="/"> */}
        <input
          type="submit"
          className="bg-blue-color w-full text-white font-bold rounded-lg py-3 px-7 mb-8"
          // onClick={handleClick}
          value="Verify OTP"
        />

        {/* </Link> */}
        <span className="text-base text-grey-color mb-8">
          Not received your code?{" "}
          <ClickableText text="Resend Code" onClick={() => {}} />
        </span>
      </form>
      <div>
        {" "}
        <p className="text-sm text-grey-color">
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
      </div>
    </div>
  );
};

export default OTPContainer;
