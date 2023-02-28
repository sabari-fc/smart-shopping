import React from "react";
import { Link, useNavigate } from "react-router-dom";

import LeftArrow from "../icons/icon_left.png";

const ResetSuccessContainer = () => {
  const navigate = useNavigate();

  function onLoginTextClicked() {
    navigate("/login", { replace: true, state: { clearHistory: true } });
  }

  return (
    <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit gap-[40vh]">
      <div className="flex flex-col">
        <p className="text-3xl font-bold mb-2">Password Reset</p>
        <p className="text-base text-grey-color mb-8 ">
          Your password has been successfully reset. Click below to login
          magically.
        </p>

        <Link to="/">
          <button className="bg-blue-color w-full text-white font-bold rounded-lg py-3 px-7 mb-4">
            Continue
          </button>
        </Link>
      </div>
      <div>
        <div className="flex flex-row justify-center">
          <img src={LeftArrow} alt="arrow" className="mr-2" />
          <span className="text-sm text-grey-color font-medium">
            <button onClick={onLoginTextClicked}> Back to login</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccessContainer;
