import React from 'react';
import Square from './Square'
import Crocodile from "./Crocodile"
import GridMaker from "./GridMaker"


function Row(props) {
  return (
    <div className="board-row">
    {props.cells.map(cell => (
      <Square data={cell}/>
    ))}
    </div>
  )
}

function Grid() {
  var gridMaker = new GridMaker(10)
  var rows = gridMaker.rows()
  return (
    <div>
    {rows.map(cells => (
      <Row cells={cells}/>
    ))}
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
