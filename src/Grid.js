import React from "react";
import CellUpdater from "./CellUpdater";
import Cell from "./Cell";
import CellGenerator from "./CellGenerator";

function newCells() {
  return new CellGenerator(15).cells();
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: newCells()
    };
  }

  safeCells() {
    return this.state.cells.filter(cell => !cell.crocodile);
  }

  gameWon() {
    return this.safeCells().every(cell => !cell.hidden);
  }

  endGame() {
    if (this.gameWon()) {
      console.log("you win!");
    }
  }

  handleClick(event, clickedCell) {
    const cellUpdater = new CellUpdater();
    let cells = this.state.cells.slice();

    if (event.type === "click" && clickedCell.crocodile) {
      cellUpdater.endGameUpdate(cells);
    } else if (event.type === "click") {
      cellUpdater.leftClickUpdate(cells, clickedCell);
    } else {
      event.preventDefault();
      cellUpdater.rightClickUpdate(cells, clickedCell);
    }

    this.setState({ cells: cells });
    this.endGame();
  }

  cellCount() {
    return this.state.cells.length;
  }

  dimension() {
    return Math.sqrt(this.cellCount());
  }

  rows() {
    let rows = [];

    for (let i = 0; i < this.cellCount(); i += this.dimension()) {
      rows.push(this.state.cells.slice(i, i + this.dimension()));
    }

    return rows.map(cells => (
      <div className="board-row" key={cells[0]["x"]}>
        {cells.map(cell => (
          <Cell
            onClick={e => this.handleClick(e, cell)}
            data={cell}
            key={`${cell["x"]}, ${cell["y"]}`}
          />
        ))}
      </div>
    ));
  }

  resetCells() {
    this.setState({ cells: newCells() });
  }

  render() {
    const rows = this.rows();

    return (
      <div>
        {rows}
        <button className="new-game" onClick={() => this.resetCells()}>
          New Game
        </button>
      </div>
    );
  }
}

export default Grid;
