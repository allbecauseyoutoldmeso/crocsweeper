import React from "react";
import Grid from "./Grid";
import Controls from "./Controls";
import CellGenerator from "./CellGenerator";

function newCells() {
  return new CellGenerator(10).cells();
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: <Grid />
    };
  }

  handleClick(cells) {
    this.setState({ grid: <Grid /> });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">{this.state.grid}</div>
          <div className="col-4">
            <Controls onClick={() => this.handleClick()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
