import React from 'react';
import Square from './Square'
import Crocodile from "./Crocodile"

function content() {
  if (Math.random() > 0.2) {
    return '?'
  } else {
    return <Crocodile/>
  }
}

function coordinates(num) {
  var array = Array()

  for(var x = 0; x < num; x++) {
    for(var y = 0; y < num; y++) {
      array.push({
        x: x,
        y: y,
      })
    }
  }

  return array
}

function addCrocodile(obj) {
  obj['crocodiles'] = (Math.random() < 0.3)
}


// var coordinates = coordinates(3)
// coordinates.forEach(addCrocodile)
// coordinates.forEach(function (obj) {
//   console.log(obj['x'])
// })

class Board extends React.Component {
  renderSquare() {
    return <Square content={content()}/>;
  }

  render() {
    return (
      <div>
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
