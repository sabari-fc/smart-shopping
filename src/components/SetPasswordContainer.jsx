import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LeftArrow from "../icons/icon_left.png";

const SetPasswordContainer = () => {
  const navigate = useNavigate();

  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  function onLoginTextClicked() {
    navigate("/login", { replace: true, state: { clearHistory: true } });
  }
  return (
    <>
      {/* <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit gap-[20vh]"> */}
      <div className="flex flex-col">
        {/* <p className="text-3xl font-bold mb-2">Set New Password</p>
        <p className="text-base text-grey-color mb-2">
          Your new password must be different to previously used passwords.
        </p> */}
        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="p-4 bg-light-blue rounded-lg mb-6 border text-sm"
          placeholder="Password"
        />
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          className="p-4 bg-light-blue rounded-lg mb-6 border text-sm"
          placeholder="Confirm Password"
        />
        <Link to="/password-reset">
          <button className="bg-blue-color w-full text-white font-bold rounded-lg py-3 px-7 mb-4">
            Reset Password
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
      {/* </div> */}
    </>
  );
};

export default SetPasswordContainer;
