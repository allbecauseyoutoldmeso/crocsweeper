import React from "react";
import CellGenerator from "./CellGenerator"
import Cell from './Cell'


function generateCells(dimension) {
  var cellGenerator = new CellGenerator(dimension)
  return cellGenerator.cells()
}


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: generateCells(20),
    };
  }

  handleClick(clickedCell) {
    console.log(this.state.cells)
    console.log(clickedCell)

    var cells = this.state.cells

    cells.forEach(function (cell) {
      if(cell['x'] === clickedCell['x'] && cell['y'] === clickedCell['y'] ) {
        cell['hidden'] = false
      }
    })

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
