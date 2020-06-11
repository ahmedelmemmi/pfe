import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
            <NavLink
              to="/candidate/register"
              activeClassName="is-active"
              exact={true}
            >
              <button>candidate</button>
            </NavLink>
            <NavLink
              to="/company/register"
              activeClassName="is-active"
              exact={true}
            >
              <button>company</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
