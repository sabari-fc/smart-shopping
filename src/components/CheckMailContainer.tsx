import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import credType from "../interfaces/CredType";

import ClickableText from "./ClickableText";

const leftArrow = require("../icons/icon_left.png");

const CheckMailContainer = () => {
  const navigate = useNavigate();
  const cred: credType = useOutletContext();

  function openEmailApp() {
    window.open("https://mail.google.com/", "_blank");
  }

  function onLoginTextClicked() {
    navigate("/login");
  }
  return (
    <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit gap-[20vh]">
      <div className="flex flex-col">
        <p className="text-3xl font-bold mb-2">Check your email</p>
        <span className="text-base text-grey-color mb-8">
          We sent a password reset link to{" "}
          <span className="font-bold text-grey-color">{cred.creds.email}</span>.{" "}
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
        <img src={leftArrow} alt="arrow" className="mr-2" />
        <span className="text-sm text-grey-color font-medium">
          <button onClick={onLoginTextClicked}> Back to login</button>
        </span>
      </div>
    </div>
  );
};

export default CheckMailContainer;
