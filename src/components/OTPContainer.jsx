import React from "react";
import { Link } from "react-router-dom";

import OtpTextField from "./OtpTextField";
import ClickableText from "./ClickableText";

const OTPContainer = ({ phone }) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl h-fit shadow-lg px-12 py-8 gap-[20vh]">
      <div>
        <p className="mb-2 font-bold text-3xl">Enter OTP</p>
        <span className="text-base text-grey-color mb-8">
          Please enter the OTP sent to{" "}
          <span className="font-bold text-grey-color">{phone}</span>.{" "}
          <Link to="/login" className="anchor-texts-lg">
            Change
          </Link>
        </span>
        <OtpTextField />
        <Link to="/">
          <button className="bg-blue-color w-full text-white font-bold rounded-lg py-3 px-7 mb-8">
            Verify OTP
          </button>
        </Link>
        <span className="text-base text-grey-color mb-8">
          Not received your code? {" "}
          <ClickableText text="Resend Code" onClick={() => {}} />
        </span>
      </div>
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
