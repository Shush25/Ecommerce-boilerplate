import React from "react";
import "./custom-input.styles.scss";

const CustomInput = ({ label, ...otherProps }) => {
  return (
    <div className="form__group">
      <input
        className="form__input"
        placeholder={label}
        {...otherProps}
      ></input>
    </div>
  );
};

export default CustomInput;
