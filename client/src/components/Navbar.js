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
        <li>
          <NavLink to="/candidate/profile" className="nav-link">
            User
          </NavLink>
        </li>
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
            to="/candidate/internshipsPage"
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
          <NavLink to="/company/candidates" className="nav-link">
            My Candidates
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/company/internships" className="nav-link">
            My internships
          </NavLink>
        </li>
        <li>
          <NavLink to="/company/profile" className="nav-link">
            User
          </NavLink>
        </li>
      </ul>
    );
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/candidate/register" activeClassName="is-active" exact>
            Register candidate
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/company/register" activeClassName="is-active" exact>
            Register company
          </NavLink>
        </li>
      </ul>
    );

    const userLink = (
      <div>
        {localStorage.usertype == 1 ? candidateLinks : companyLinks}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
    // const companyLink = (
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <NavLink to="/company/profile" className="nav-link">
    //           User
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
    //           Logout
    //         </a>
    //       </li>
    //     </ul>
    //     {localStorage.usertype === 1 ? companyLinks : candidateLinks}
    //   </div>
    // );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
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
