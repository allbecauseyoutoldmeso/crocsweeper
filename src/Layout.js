import React from "react";
import Game from "./game";
import BigCroc from "./bigCroc";

class Layout extends React.Component {
  render() {
    return (
      <div className="game-container">
        <BigCroc />
        <Game />
      </div>
    );
  }
}

export default Layout;
