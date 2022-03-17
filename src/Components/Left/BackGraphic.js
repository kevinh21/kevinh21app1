import React from "react";
import "./backGraphic.css";

function BackGraphic() {
  return (
    <div className="BackGraphic">
      <img
        src={process.env.PUBLIC_URL + "/images/bg-desktop.svg"}
        alt="MockUp_Image"
      />
    </div>
  );
}

export default BackGraphic;
