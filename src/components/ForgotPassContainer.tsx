import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import credType from "../interfaces/CredType";

const leftArrow = require("../icons/icon_left.png");

const ForgotPassContainer = () => {
  const cred: credType = useOutletContext();
  const navigate = useNavigate();

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

  function onLoginTextClicked() {
    navigate(-1);
  }
  return (
    <div className="flex flex-col rounded-2xl shadow-lg px-12 py-8 h-fit gap-[25vh]">
      <div>
        <p className="text-3xl font-bold mb-2">Forgot Password</p>
        <p className="text-base text-grey-color mb-8">
          No worries, we’ll send you reset instructions.
        </p>
        <input
          type="text"
          onChange={handleInputChange}
          className="p-4 w-full bg-light-blue rounded-lg mb-6 border text-sm"
          placeholder="Enter Your Email"
        />
        <Link to="check-your-mail">
          <button className="bg-blue-color w-full text-base text-white font-bold rounded-lg py-3 px-7 mb-4">
            Reset Password
          </button>
        </Link>
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

export default ForgotPassContainer;
