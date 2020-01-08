import React, { Fragment } from "react";
import CellUpdater from "./CellUpdater";
import Cell from "./Cell";
import CellGenerator from "./CellGenerator";
import YouWin from "./YouWin";
import Picker from "react-mobile-picker";

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

function newCells(level) {
  return new CellGenerator(dimension(), level).cells();
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: newCells(1),
      showYouWin: false,
      valueGroups: {
        level: 1
      },
      optionGroups: {
        level: [1]
      }
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
    const newLevel = this.state.valueGroups.level + 1;

    if (this.gameWon()) {
      this.props.stopTimer();
      this.setState({
        showYouWin: true,
        valueGroups: {
          level: newLevel
        },
        optionGroups: {
          level: [...Array(newLevel + 1).keys()].slice(1)
        }
      });
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
    // this.setState({ cells: newCells() });
    this.setState({
      cells: newCells(this.state.valueGroups.level)
    });
    this.props.resetTimer();
    this.props.startTimer();
  }

  hideYouWin() {
    this.setState({ showYouWin: false });
  }

  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));

    this.resetGame();
  };

  render() {
    const rows = this.rows();
    const { optionGroups, valueGroups } = this.state;

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
        <Picker
          optionGroups={optionGroups}
          valueGroups={valueGroups}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default Grid;
