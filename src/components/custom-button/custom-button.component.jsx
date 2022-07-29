import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ label, ...otherProps }) => {
  return (
    <div>
      <button className="btn btn--blue" {...otherProps}>
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
