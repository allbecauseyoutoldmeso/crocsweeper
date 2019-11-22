import React from "react";
import Grid from "./Grid";
import Controls from "./Controls";

class Layout extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <Grid />
          </div>
          <div className="col-4">
            <Controls />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
