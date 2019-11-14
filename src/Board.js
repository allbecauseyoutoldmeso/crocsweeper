import React from 'react';
import Square from './Square'
import Crocodile from "./Crocodile"
import GridMaker from "./GridMaker"






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
