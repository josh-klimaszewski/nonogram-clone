import React, { Component } from "react";
import "./style.css";

class Tile extends Component {
  render(value) {
    console.log(value)
    return (
      <div 
      onClick={() => this.props.onClick()}
      className={`tile  ${value}`} />);
  }

}
export default Tile;
