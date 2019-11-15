class CellUpdater {

  updatedCells(cells, clickedCell) {

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

    return cells
  }
}

export default CellUpdater;
