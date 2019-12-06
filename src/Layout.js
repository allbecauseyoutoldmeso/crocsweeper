import React from "react";
import Game from "./game";
import BigCroc from "./bigCroc";

class Layout extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <Game />
          </div>
          <div className="col-3">
            <div className="main-image">
              <BigCroc />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
