// import React, { useMemo, useState } from "react";
// import { useOutletContext } from "react-router-dom";
// import { RE_DIGIT } from "../constants/constants";
// import credType from "../interfaces/CredType";

// export type Props = {
//   value: string;
//   valueLength: number;
//   onChange: (value: string) => void;
// };

// const OtpTextField = (props: Props) => {
//   const valueItems = useMemo(() => {
//     const valueArray = props.value.split("");
//     const items: Array<string> = [];

//     for (let i = 0; i < props.valueLength; i++) {
//       const char = valueArray[i];

//       if (RE_DIGIT.test(char)) {
//         items.push(char);
//       } else {
//         items.push("");
//       }
//     }

//     return items;
//   }, [props.value, props.valueLength]);

//   const focusToNextInput = (target: HTMLElement) => {
//     const nextElementSibling =
//       target.nextElementSibling as HTMLInputElement | null;

//     if (nextElementSibling) {
//       nextElementSibling.focus();
//     }
//   };

//   const focusToPrevInput = (target: HTMLElement) => {
//     const previousElementSibling =
//       target.previousElementSibling as HTMLInputElement | null;

//     if (previousElementSibling) {
//       previousElementSibling.focus();
//     }
//   };

//   const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     const { key } = e;
//     const target = e.target as HTMLInputElement;

//     if (key === "ArrowRight" || key === "ArrowDown") {
//       e.preventDefault();
//       return focusToNextInput(target);
//     }

//     if (key === "ArrowLeft" || key === "ArrowUp") {
//       e.preventDefault();
//       return focusToPrevInput(target);
//     }

//     const targetValue = target.value;

//     // keep the selection range position
//     // if the same digit was typed
//     target.setSelectionRange(0, targetValue.length);

//     if (e.key !== "Backspace" || targetValue !== "") {
//       return;
//     }

//     focusToPrevInput(target);
//   };

//   const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
//     const { target } = e;

//     // keep focusing back until previous input
//     // element has value
//     const prevInputEl =
//       target.previousElementSibling as HTMLInputElement | null;

//     if (prevInputEl && prevInputEl.value === "") {
//       return prevInputEl.focus();
//     }

//     target.setSelectionRange(0, target.value.length);
//   };

//   const inputOnChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     idx: number
//   ) => {
//     const target = e.target;
//     let targetValue = target.value.trim();
//     const isTargetValueDigit = RE_DIGIT.test(targetValue);

//     if (!isTargetValueDigit && targetValue !== "") {
//       return;
//     }

//     targetValue = isTargetValueDigit ? targetValue : " ";

//     const targetValueLength = targetValue.length;

//     if (targetValueLength === 1) {
//       const newValue =
//         props.value.substring(0, idx) +
//         targetValue +
//         props.value.substring(idx + 1);

//       props.onChange(newValue);

//       if (!isTargetValueDigit) {
//         return;
//       }

//       const nextInputEl = target.nextElementSibling as HTMLInputElement | null;

//       if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
//         return;
//       }

//       targetValue = isTargetValueDigit ? targetValue : " ";

//       const nextElementSibling =
//         target.nextElementSibling as HTMLInputElement | null;

//       if (nextElementSibling) {
//         nextElementSibling.focus();
//       }
//     } else if (targetValueLength === props.valueLength) {
//       props.onChange(targetValue);

//       target.blur();
//     }
//   };

//   return (
//     <div className="flex justify-between items-center space-x-2">
//       {valueItems.map((digit, index) => (
//         // <input
//         //   key={index}
//         //   type="text"
//         //   maxLength={1}
//         //   value={otp.charAt(index) || ""}
//         //   onChange={(event) => handleInput(event, index)}
//         //   onPaste={handlePaste}
//         // className="w-10 h-10 mb-6 border-b border-stroke-grey focus:outline-none  text-center"
//         // />

//         <input
//           key={index}
//           type="text"
//           inputMode="numeric"
//           onKeyDown={inputOnKeyDown}
//           autoComplete="one-time-code"
//           pattern="\d{1}"
//           onFocus={inputOnFocus}
//           maxLength={props.valueLength}
//           onChange={(e) => inputOnChange(e, index)}
//           value={digit}
// className="w-10 h-10 mb-6 border-b border-stroke-grey focus:outline-none  text-center"
//         />
//       ))}
//     </div>
//   );
// };

// export default OtpTextField;

import React, { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import credType from "../interfaces/CredType";

interface OTPFieldProps {
  onPaste: (value: string) => void;
  numInputs: number;
  onBackspace: (index: number) => void;
}

const OtpTextField: React.FC<OTPFieldProps> = ({
  onPaste,
  numInputs,
  onBackspace,
}) => {
  const cred: credType = useOutletContext();
  const [otpValues, setOTPValues] = useState<string[]>(
    new Array(numInputs).fill("")
  );
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const newValues = [...otpValues];
    newValues[index] = value;
    setOTPValues(newValues);
    cred.setCreds({
      ...cred.creds,
      input: {
        ...cred.creds.input,
        otp: newValues
          .map((val, _) => val.trim())
          .join("")
          .toString(),
      },
    });
    if (value) {
      focusNextInput(index);
    } else {
      focusPrevInput(index);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedValue = event.clipboardData.getData("text");
    if (pastedValue.length <= numInputs) {
      const newValues = pastedValue
        .split("")
        .concat(new Array(numInputs - pastedValue.length).fill(""));
      setOTPValues(newValues);
      onPaste(pastedValue);
    }
    event.preventDefault();
  };

  // console.log(cred.creds);

  const focusNextInput = (currentIndex: number) => {
    if (currentIndex < numInputs - 1 && inputRefs.current[currentIndex + 1]) {
      inputRefs.current[currentIndex + 1].focus();
    }
  };

  const focusPrevInput = (currentIndex: number) => {
    if (currentIndex > 0 && inputRefs.current[currentIndex - 1]) {
      inputRefs.current[currentIndex - 1].focus();
    }
  };

  const handleBackspace = (index: number) => {
    const newValues = [...otpValues];
    newValues[index] = "";
    setOTPValues(newValues);
    if (index > 0) {
      focusPrevInput(index);
    }
    onBackspace(index);
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <div className="flex flex-row justify-between">
      {otpValues.map((value, index) => (
        <input
          className="  w-10 h-10 mb-6 border-b border-stroke-grey focus:outline-none  text-center mr-4 first:ml-0 last:mr-0"
          key={index}
          type="text"
          value={value}
          onChange={(event) => handleChange(index, event)}
          onPaste={handlePaste}
          onKeyDown={(event) => {
            if (event.key === "Backspace") {
              handleBackspace(index);
            }
          }}
          maxLength={1}
          ref={(input) =>
            (inputRefs.current[index] = input as HTMLInputElement)
          }
        />
      ))}
    </div>
  );
};

export default OtpTextField;
