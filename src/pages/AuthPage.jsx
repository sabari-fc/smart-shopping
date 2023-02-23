import React from "react";

import ShopLogo from "../images/logo.svg";

const AuthPage = ({ container, image }) => {
  return (
    <div className="flex flex-col h-screen overscroll-contain fixed top-0 bottom-0 right-0 left-0 px-[60px]">
      <div className="max-h-[20vh]">
        <img src={ShopLogo} alt="logo" width="150px" />
      </div>

      <div className="flex flex-row justify-between items-center h-[80vh] ">
        <div className="object-contain h-[80%]">
          <img src={image} className="h-[100%] object-contain" alt="cart" />
        </div>
        {container}
      </div>
    </div>
  );
};

export default AuthPage;
