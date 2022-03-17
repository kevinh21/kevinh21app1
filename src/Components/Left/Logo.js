import React from "react";
import "./logo.css";

function Logo() {
  return (
    <div className="Logo">
      <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Main_Image" />
    </div>
  );
}

export default Logo;
