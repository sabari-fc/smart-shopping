import React, { useState } from "react";


const OtpTextField = () => {
  const [otp, setOTP] = useState("");

  const handleInput = (event, index) => {
    const value = event.target.value;
    const newOTP = otp.slice(0, index) + value + otp.slice(index + 1);
    setOTP(newOTP);

    // Focus on the next input field
    if (value && index < 5) {
      event.target.nextSibling.focus();
    }
  };

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData("text");
    if (/^\d{1,6}$/.test(pastedText)) {
      setOTP(pastedText);
    }
  };
  return (
    <div className="flex justify-between items-center space-x-2">
      {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp.charAt(index) || ""}
          onChange={(event) => handleInput(event, index)}
          onPaste={handlePaste}
          className="w-10 h-10 mb-6 border-b border-stroke-grey focus:outline-none  text-center"
        />
      ))}
    </div>
  );
};

export default OtpTextField;
