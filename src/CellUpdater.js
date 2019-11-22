class CellUpdater {
  endGameUpdate(cells) {
    cells.forEach(function(cell) {
      if (cell.crocodile) {
        cell.hidden = false;
      }
    });
  }

  arraysEqual(a, b) {
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  revealCells(cells) {
    const hiddenCells = cells.filter(cell => cell.hidden && !cell.crocodile);
    let changedCount = 0;

    hiddenCells.forEach(function(a) {
      const neighbours = cells.filter(function(b) {
        if (a === b) {
          return false;
        } else if (
          [b.x - 1, b.x, b.x + 1].includes(a.x) &&
          [b.y - 1, b.y, b.y + 1].includes(a.y)
        ) {
          return true;
        } else {
          return false;
        }
      });

      const magicNeighbours = neighbours.filter(
        neighbour => neighbour.number === 0 && !neighbour.hidden
      );

      if (magicNeighbours.length > 0) {
        a.hidden = false;
        changedCount += 1;
      }
    });

    if (changedCount > 0) {
      this.revealCells(cells);
    }
  }

  leftClickUpdate(cells, clickedCell) {
    cells.forEach(function(cell) {
      if (cell === clickedCell) {
        cell.hidden = false;
      }
    });

    this.revealCells(cells);
  }

  rightClickUpdate(cells, clickedCell) {
    cells.forEach(function(cell) {
      if (cell === clickedCell) {
        cell.flagged = !cell.flagged;
      }
    });
  }
}

export default CellUpdater;
