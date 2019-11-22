class CellUpdater {
  endGameUpdate(cells) {
    cells.forEach(function(cell) {
      if (cell["crocodile"] === true) {
        cell["hidden"] = false;
      }
    });
  }

  arraysEqual(a, b) {
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  revealCells(cells) {
    cells.forEach(function(a) {
      const neighbours = cells.filter(function(b) {
        if (a === b) {
          return false;
        } else if (
          [b["x"] - 1, b["x"], b["x"] + 1].includes(a["x"]) &&
          [b["y"] - 1, b["y"], b["y"] + 1].includes(a["y"])
        ) {
          return true;
        } else {
          return false;
        }
      });

      const magicNeighbours = neighbours.filter(
        neighbour => neighbour["number"] === 0 && neighbour["hidden"] === false
      );

      if (magicNeighbours.length > 0 && a["crocodile"] === false) {
        a["hidden"] = false;
      }
    });
  }

  leftClickUpdate(cells, clickedCell) {
    cells.forEach(function(cell) {
      if (cell["x"] === clickedCell["x"] && cell["y"] === clickedCell["y"]) {
        cell["hidden"] = false;
      }
    });

    var cellSnapShot = [...cells];
    this.revealCells(cells);

    while (!this.arraysEqual(cells, cellSnapShot)) {
      cellSnapShot = [...cells];
      this.revealCells(cells);
    }
  }

  rightClickUpdate(cells, clickedCell) {
    cells.forEach(function(cell) {
      if (cell["x"] === clickedCell["x"] && cell["y"] === clickedCell["y"]) {
        cell["flagged"] = !cell["flagged"];
      }
    });
  }
}

export default CellUpdater;
