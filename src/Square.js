import React from "react";
import Crocodile from "./Crocodile"

function Square(props) {
  if (props.data['crocodile']) {
    return (
      <button className="square">
        <Crocodile/>
      </button>
    )
  } else {
    return (
      <button className="square">
        {props.data['number']}
      </button>
    )
  }
}

export default Square;
