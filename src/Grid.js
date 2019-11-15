import React from "react";
import CellGenerator from "./CellGenerator"
import CellUpdater from "./CellUpdater"
import Cell from './Cell'

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: new CellGenerator(20).cells(),
    };
  }

  handleClick(clickedCell) {
    var cells = new CellUpdater().updatedCells(this.state.cells, clickedCell)
    this.setState({cells: cells});
  }

  cellCount() {
    return this.state.cells.length
  }

  dimension() {
    return Math.sqrt(this.cellCount())
  }

  rows() {
    var rows = []

    for(var i = 0; i < this.cellCount(); i += this.dimension()) {
      rows.push(this.state.cells.slice(i, i + this.dimension()))
    }

    return (
      rows.map(cells => (
        <div className="board-row" key={cells[0]['x']}>
          {
            cells.map(cell => (
              <Cell
                onClick={() => this.handleClick(cell)}
                data={cell}
                key={`${cell['x']}, ${cell['y']}`}
              />
            ))
          }
        </div>
      ))
    )
  }

  render() {
    var rows = this.rows()

    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default Grid;
