import React, { Fragment } from "react";
import CellUpdater from "./CellUpdater";
import Cell from "./Cell";
import CellGenerator from "./CellGenerator";
import YouWin from "./YouWin";

function dimension() {
  const screenSize = window.innerWidth;
  if (screenSize < 400) {
    return 8;
  } else if (screenSize < 500) {
    return 12;
  } else {
    return 15;
  }
}

function newCells() {
  return new CellGenerator(dimension()).cells();
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: newCells(),
      showYouWin: false
    };
    this.props.startTimer();
  }

  safeCells() {
    return this.state.cells.filter(cell => !cell.crocodile);
  }

  gameWon() {
    return this.safeCells().every(cell => !cell.hidden);
  }

  endGame() {
    if (this.gameWon()) {
      this.props.stopTimer();
      this.setState({ showYouWin: true });
    }
  }

  handleClick(event, clickedCell) {
    const cellUpdater = new CellUpdater();
    let cells = this.state.cells.slice();

    if (event.type === "click" && clickedCell.crocodile) {
      cellUpdater.endGameUpdate(cells);
      this.props.stopTimer();
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

  resetGame() {
    this.props.stopTimer();
    this.setState({ cells: newCells() });
    this.props.resetTimer();
    this.props.startTimer();
  }

  hideYouWin() {
    this.setState({ showYouWin: false });
  }

  render() {
    const rows = this.rows();

    return (
      <Fragment>
        <YouWin
          show={this.state.showYouWin}
          onClick={() => this.hideYouWin()}
        />
        <div className="grid">{rows}</div>
        <div>
          <button className="new-game" onClick={() => this.resetGame()}>
            New Game
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Grid;
