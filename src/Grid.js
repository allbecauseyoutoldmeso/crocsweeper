import React from "react";
import CellGenerator from "./CellGenerator"
import Cell from './Cell'

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: new CellGenerator(20).cells(),
    };
  }


  handleClick(clickedCell) {
    var cells = this.state.cells

    cells.forEach(function (cell) {
      if(cell['x'] === clickedCell['x'] && cell['y'] === clickedCell['y'] ) {
        cell['hidden'] = false
      }
    })

    cells.forEach(function(a) {
      var neighbours = cells.filter(function(b) {
        if(a === b) {
          return false
        } else if ([b['x'] - 1, b['x'], b['x'] + 1].includes(a['x']) && [b['y'] - 1, b['y'], b['y'] + 1].includes(a['y'])) {
          return true
        } else {
          return false
        }
      })

      var magicNeighbours = neighbours.filter(function(neighbour) {
        return neighbour['number'] === 0 && neighbour['hidden'] === false
      })

      if(magicNeighbours.length > 0 && a['crocodile'] === false) {
        a['hidden'] = false
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
