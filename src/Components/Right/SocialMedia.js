import React from "react";
import "./socialMedia.css";

function SocialMedia() {
  return (
    <div className="flexRow">
      <a className="fb">
        <a
          href="https://www.freeiconspng.com/img/2343"
          title="Image from freeiconspng.com"
        >
          <img
            className="fb"
            src="https://www.freeiconspng.com/uploads/facebook-logo-png-20.png"
            width="45"
            alt="High quality Facebook Logo Cliparts For Free!"
          />
        </a>

        <img
          className="twitter"
          src={process.env.PUBLIC_URL + "/images/twitter1.png"}
          alt="Twitter_Image"
        />
        <img
          className="instagram"
          src={process.env.PUBLIC_URL + "/images/instagram1.png"}
          alt="Instagram_Image"
        />
      </a>
    </div>
  );
}

export default SocialMedia;
