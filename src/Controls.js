import React from "react";

class Controls extends React.Component {

  render() {
    return(
      <div className="controls">
        <div className="row">
          <img src="crocodile.png" alt="crocodile" className="main-image"/>
        </div>
        <div className="row">
          <button className="new-game" onClick={() => this.props.onClick()}>
            New Game
          </button>
        </div>
      </div>
    )
  }

}

export default Controls;
