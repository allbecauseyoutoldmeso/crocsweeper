import React from "react";
import Timer from "./timer";
import BigCroc from "./bigCroc";

class Layout extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <Timer />
          </div>
          <div className="col-1">
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
