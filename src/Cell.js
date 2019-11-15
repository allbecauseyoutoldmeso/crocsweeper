import React from "react";
import Crocodile from "./Crocodile"

function Cell(props) {

  if (props.data['hidden']) {
    var content = null
  } else if (props.data['crocodile']) {
    var content = <Crocodile/>
  } else {
    var content = props.data['number']
  }

  return (
    <button className="square">
      {content}
    </button>
  )
}

export default Cell;
