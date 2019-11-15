import React from "react";
import GridMaker from "./GridMaker"
import Row from "./Row"


function makeCells(dimension) {
  var gridMaker = new GridMaker(dimension)
  return gridMaker.cells()
}


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: makeCells(20),
    };
  }

  cellCount() {
    return this.state.cells.length
  }

  dimension() {
    return Math.sqrt(this.cellCount())
  }

  makeRows() {
    var rows = []

    for(var i = 0; i < this.cellCount(); i += this.dimension()) {
      rows.push(this.state.cells.slice(i, i + this.dimension()))
    }

    return (
      rows.map(cells => (
        <Row cells={cells} key={cells[0]['x']}/>
      ))
    )
  }

  render() {
    var rows = this.makeRows()

    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default Grid;
