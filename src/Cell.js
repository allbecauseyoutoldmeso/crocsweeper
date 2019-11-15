import React from "react";
import Crocodile from "./Crocodile"
import Flag from "./Flag"

class Cell extends React.Component {

  content() {
    if (this.props.data['hidden']) {
      return null
    } else if (this.props.data['crocodile']) {
      return <Crocodile/>
    } else if (this.props.data['flagged']) {
      return <Flag/>
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
