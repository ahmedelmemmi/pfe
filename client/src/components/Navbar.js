import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const candidateLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/candidate/invitations"
            activeClassName="is-active"
            exact
          >
            My invitations
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/candidate/applications"
            activeClassName="is-active"
            exact
          >
            My applications
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/candidate/internships"
            activeClassName="is-active"
            exact
          >
            Internships
          </NavLink>
        </li>
      </ul>
    );

    const companyLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/company/internships" className="nav-link">
            My internships
          </NavLink>
        </li>
      </ul>
    );
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/candidate/register" activeClassName="is-active" exact>
            Register
          </NavLink>
        </li>
      </ul>
    );

    const userLink = (
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/candidate/profile" className="nav-link">
              User
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
              Logout
            </a>
          </li>
        </ul>
        {localStorage.usertype == 1 ? candidateLinks : companyLinks}
      </div>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" exact>
                Home
              </NavLink>
            </li>
          </ul>

          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
