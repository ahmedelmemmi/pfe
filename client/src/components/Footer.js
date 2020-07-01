import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/components/_Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="svg-container">
          <img src={require("../logos/Path 3.svg")} id="footerphoto" alt="" />
        </div>
        <div className="svg-container">
          <img
            src={require("../logos/QUESTION.png")}
            id="questionphoto"
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default Footer;
