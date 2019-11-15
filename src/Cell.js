import React from "react";
import Crocodile from "./Crocodile"

class Cell extends React.Component {

  content() {
    if (this.props.data['hidden']) {
      return null
    } else if (this.props.data['crocodile']) {
      return <Crocodile/>
    } else {
      return this.props.data['number']
    }
  }

  render() {
    var content = this.content()

    return(
      <button className="square" onClick={() => this.props.onClick()}>
        {content}
      </button>
    )
  }

}

export default Cell;
