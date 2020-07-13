import React, { Component } from "react";
import Company from "./Company";
import Candidate from "./Candidate";
import AboutUs from "./AboutUs";
import Whyus from "./Whyus";
import "../../styles/styles.scss";
import Footer from "../Footer";
class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">
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
       
        <Footer/>
       
      </div>
    );
  }
}

export default Landing;
