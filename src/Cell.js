import React from "react";
import Crocodile from "./Crocodile"
import Flag from "./Flag"

class Cell extends React.Component {

  content() {
    if (this.props.data['flagged']) {
      return <Flag/>
    } else if (this.props.data['hidden']) {
      return null
    } else if (this.props.data['crocodile']) {
      return <Crocodile/>
    } else {
      return this.props.data['number']
    }
  }

  render() {
    const content = this.content()

    return(
      <button className="square" onClick={(e) => this.props.onClick(e)} onContextMenu={(e) => this.props.onClick(e)}>
        {content}
      </button>
    )
  }

}

export default Cell;
