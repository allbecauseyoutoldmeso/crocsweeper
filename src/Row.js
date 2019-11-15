import React from 'react';
import Cell from './Cell'

function Row(props) {
  var cells = props.cells.map(cell => (
    <Cell data={cell} key={`${cell['x']}, ${cell['y']}`}/>
  ))
  return (
    <div className="board-row">
      {cells}
    </div>
  )
}

export default Row;
