import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Company from "./Company"
import Candidate from "./Candidate"
import '../../styles/styles.scss'
class Landing extends Component {
  render() {
    return (
      //  <div className="container">
      //    <div className="jumbotron mt-5">
      //      <div className="col-sm-8 mx-auto">
      //        <h1 className="text-center">WELCOME</h1>
      //        <NavLink
      //          to="/candidate/register"
      //          activeClassName="is-active"
      //          exact={true}
      //        >
      //          <button>candidate</button>
      //        </NavLink>
      //        <NavLink
      //          to="/company/register"
      //          activeClassName="is-active"
      //          exact={true}
      //        >
      //          <button>company</button>
      //        </NavLink>
      //      </div>
      //    </div>
      //  </div>
      <div className="container" >
        <div className="row">
            <Company/>
            <Candidate/>
        </div>
    </div>
    );
  }
}

export default Landing;
