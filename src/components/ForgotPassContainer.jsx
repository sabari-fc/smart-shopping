import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LeftArrow from "../icons/icon_left.png";

const ForgotPassContainer = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");

  function onLoginTextClicked() {
    navigate(-1);
  }
  return (
    <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit gap-[20vh]">
      <div>
        <p className="text-3xl font-bold mb-2">Forgot Password</p>
        <p className="text-base text-grey-color mb-8">
          No worries, we’ll send you reset instructions.
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="p-4 w-full bg-light-blue rounded-lg mb-6 border text-sm"
          placeholder="Enter Your Email"
        />
        <Link to="/password-reset" state={{ email: email }}>
          <button className="bg-blue-color w-full text-base text-white font-bold rounded-lg py-3 px-7 mb-4">
            Reset Password
          </button>
        </Link>
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

export default ForgotPassContainer;
