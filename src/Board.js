import React from 'react';
import Square from './Square'
import GridMaker from "./GridMaker"


function Row(props) {
  var cells = props.cells.map(cell => (
    <Square data={cell}/>
  ))
  return (
    <div className="board-row">
      {cells}
    </div>
  )
}

function Grid() {
  var gridMaker = new GridMaker(20)
  var rows = gridMaker.rows().map(cells => (
    <Row cells={cells}/>
  ))

  return (
    <div>
      {rows}
    </div>
  )
}


class Board extends React.Component {

  render() {
    return (
      <Grid/>
    );
  }
}

export default Board;
