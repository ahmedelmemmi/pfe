import React from "react";
import "../../styles/components/AboutUs/_card.scss";

export default class Card extends React.Component {
  render() {
    return (
      <div className="box">
        <h6>{this.props.number}</h6>
        <img src={this.props.img} alt="" />
        <h4>{this.props.title}</h4>
        <div className="box_description">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
