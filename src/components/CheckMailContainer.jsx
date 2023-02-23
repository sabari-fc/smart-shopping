import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ClickableText from "./ClickableText";

import LeftArrow from "../icons/icon_left.png";

const CheckMailContainer = ({ email }) => {
  const navigate = useNavigate();

  function openEmailApp() {
    window.open("https://mail.google.com/", "_blank");
  }

  function onLoginTextClicked() {
    navigate("/login", { replace: true, state: { clearHistory: true } });
  }
  return (
    <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit gap-[20vh]">
      <div className="flex flex-col">
        <p className="text-3xl font-bold mb-2">Check your email</p>
        <span className="text-base text-grey-color mb-8">
          We sent a password reset link to{" "}
          <span className="font-bold text-grey-color">{email}</span>.{" "}
        </span>

        <Link to="/password-reset">
          <button
            onClick={openEmailApp}
            className="bg-blue-color w-full text-base text-white font-bold rounded-lg py-3 px-7 mb-4"
          >
            Open Email App
          </button>
        </Link>
        <span className="text-base text-grey-color mb-8">
          Didn’t receive the email?{" "}
          <ClickableText text="Click to resend" onClick={() => {}} />
        </span>
      </div>

      <div className="flex flex-row justify-center">
        <img src={LeftArrow} alt="arrow" className="mr-2" />
        <span className="text-sm text-grey-color font-medium">
          <button onClick={onLoginTextClicked}> Back to login</button>
        </span>
      </div>
    </div>
  );
};

export default CheckMailContainer;
