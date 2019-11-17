import React from "react";
import Grid from "./Grid";
import Controls from "./Controls"
import CellGenerator from "./CellGenerator"

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: new CellGenerator(10).cells(),
    };
  }

  handleClick(cells) {
    this.setState({cells: cells});
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <Grid cells={this.state.cells}/>
          </div>
          <div className="col-4">
            <Controls onClick={() => this.handleClick(new CellGenerator(10).cells())}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
