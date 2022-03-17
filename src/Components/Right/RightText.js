import React from "react";
import "./rightText.css";
import SocialMedia from "./SocialMedia";

function RightText() {
  return (
    <div className="adjustLeft">
      <div className="header">
        {" "}
        Build The Community <br />
        Your Fans Will Love
      </div>
      <div className="text">
        {" "}
        <br />
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.{" "}
      </div>
      <br></br>
      <br></br>
      <button>Register</button>
      <div>
        <br></br>
        <SocialMedia />
      </div>
    </div>
  );
}

export default RightText;
