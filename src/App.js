// TO OVERLAP THE BACKGROUND GRAPHIC
// #overlapthis {
//     background-image:url("mymessage.gif");
//     height:100px;
//     left:50px; /* play around with this */
//     position:absolute;
//     top:90px; /* and play around with this */
//     width:500px;
// }

// #thebigimage {
//     background-image:url("bread_wine.jpg");
//     height:548px;
//     margin-left:auto;
//     margin-right:auto;
//     position:relative; /* and this has to be relative */
//     width:731px;
// }

import React from "react";
import "./App.css";
import Logo from "./Components/Left/Logo";
import BackGraphic from "./Components/Left/BackGraphic";
import LeftImg from "./Components/Left/LeftImg";
import RightText from "./Components/Right/RightText";

function App(props) {
  return (
    <div className="layout">
      <div className="App">
        <Logo />
        <BackGraphic />
        <LeftImg />
      </div>
      <RightText />
    </div>
  );
}

export default App;
//
