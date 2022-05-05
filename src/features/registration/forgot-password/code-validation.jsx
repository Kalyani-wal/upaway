import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CodeValidation = () => {
  return (
    <>
      <h2 className="title">Please verify your account</h2>
      <p className="description">
        Insert the 6 digit code sent to <br /> +1 (555) 564 788
      </p>
      <div className="code-input-holder input-field">
        {/* Please add className="filled" for input element once the value is entered in each input */}
        <input type="text" maxLength={2} />
        <span></span>
        <input type="text" maxLength={2} />
        <span></span>
        <input type="text" maxLength={2} />
      </div>
      <button className="button button-verify" disabled>
        Verify
      </button>
      {/* <button className="button button-verify button-verified">
        <FontAwesomeIcon icon={faCheck} />
        Verified
      </button>
      <button className="button button-verify button-loader">
        <div className="loader"></div>
      </button> */}
      <div className="text-code-send">
        Didn’t recive the code?
        <span>Send again</span>
      </div>
    </>
  );
};

export default CodeValidation;
