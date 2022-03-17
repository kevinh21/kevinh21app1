import React from "react";
import "./leftImg.css";

function LeftImg() {
  return (
    <div className="leftimg">
      <img
        src={process.env.PUBLIC_URL + "/images/illustration-mockups.svg"}
        // className="leftImg"
        alt="Main_Image"
      />
    </div>
  );
}

export default LeftImg;
