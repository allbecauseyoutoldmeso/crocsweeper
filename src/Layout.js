import React from "react";
import Grid from "./Grid";
import Crocodile from "./Crocodile";

class Layout extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <Grid />
          </div>
          <div className="col-4">
            <Crocodile />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
