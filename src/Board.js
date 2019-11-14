import React from 'react';
import Square from './Square'
import Crocodile from "./Crocodile"

class GridMaker {
  constructor(dimension) {
    this.dimension = dimension
  }

  coordinates() {
    var array = []

    for(var x = 0; x < this.dimension; x++) {
      for(var y = 0; y < this.dimension; y++) {
        array.push({
          x: x,
          y: y,
        })
      }
    }

    return array
  }

  addCrocodile(obj) {
    obj['crocodile'] = (Math.random() < 0.3)
  }

  addNumber(obj, coordinates) {

  }

  newGrid() {
    var coordinates = this.coordinates(3)

    coordinates.forEach(this.addCrocodile)

    coordinates.forEach(function (a) {

      var neighbours = coordinates.filter(function(b) {
        if(a === b) {
          return false
        } else if ([b['x'] - 1, b['x'], b['x'] + 1].includes(a['x']) || [b['y'] - 1, b['y'], b['y'] + 1].includes(a['y'])) {
          return true
        } else {
          return false
        }
      })

      var crocodiles = neighbours.filter(function(c) {
        return c['crocodile'] === true
      })

      a['number'] = crocodiles.length
    })

    return coordinates
  }
}




function content() {
  if (Math.random() > 0.2) {
    return '?'
  } else {
    return <Crocodile/>
  }
}

class Board extends React.Component {
  renderSquare() {
    return <Square content={content()}/>;
  }

  grid() {
    var gridMaker = new GridMaker(3)
    return gridMaker.newGrid()
  }

  render() {
    return (
      <div>
        {  }
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
      </div>
    );
  }
}

export default Board;
