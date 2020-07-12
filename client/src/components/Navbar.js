import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/components/Home/_Navbar.scss";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

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
            className="nav-link"
            exact
          >
            My invitations
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/candidate/applications"
            activeClassName="is-active"
            className="nav-link"
            exact
          >
            My applications
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/candidate/internshipsPage"
            activeClassName="is-active"
            className="nav-link"
            exact
          >
            Internships
          </NavLink>
        </li>
          <Dropdown>
          <Dropdown.Toggle className="nav-link dropdown-toggle" id="navbarDropdown">
          Account
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/candidate/profile">My Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={this.logOut.bind(this)}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    );

    const companyLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/company/internships" className="nav-link">
            My internships
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/company/candidatesPage" className="nav-link">
            Candidates
          </NavLink>
        </li>
        <Dropdown>
          <Dropdown.Toggle className="nav-link dropdown-toggle" id="navbarDropdown">
          Account
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/company/profile">My Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={this.logOut.bind(this)}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    );
    const loginRegLink = (
      <ul className="navbar-nav  ">
        <li className="nav-item">
          <NavLink
            to="/candidate/register"
            activeClassName="is-active"
            className="nav-link"
            exact
          >
            Register candidate
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/company/register"
            activeClassName="is-active"
            className="nav-link"
            exact
          >
            Register company
          </NavLink>
        </li>
        <form class="form-inline  ">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </ul>
    );

    const userLink = (
      <div>
        <ul className="navbar-nav">
          {localStorage.usertype == 1 ? candidateLinks : companyLinks}
        </ul>
      </div>
    );
    return (
      <nav className="navbar navbar-expand-lg sticky-top">
        <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarsExample10"
        >
          <a className="navbar-brand" href="/">
            <img
              src={require("../logos/careerTn.png")}
              id="logo_devagnos"
              alt=""
            />
          </a>

          <ul className="navbar-nav ">
            {localStorage.usertoken ? userLink : loginRegLink}
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
