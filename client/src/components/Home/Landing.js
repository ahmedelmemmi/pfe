import React, { Component } from "react";
import Company from "./Company";
import Candidate from "./Candidate";
import AboutUs from "./AboutUs";
import Whyus from "./Whyus";
import "../../styles/styles.scss";
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <img id="path" src={require("../../logos/Path 1.svg")} alt="" />
        <div className="row">
          <Company />
          <Candidate />
        </div>
        <div className="row">
          <Whyus />
        </div>
        {/* <div className="row"> */}
        <AboutUs />
        {/* </div> */}
      </div>
    );
  }
}

export default Landing;
