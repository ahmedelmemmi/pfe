import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';



class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
<<<<<<< HEAD
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
     const candidateLinks = (
       <ul className="navbar-nav">
         <li className="nav-item">
         <NavLink to="/candidate/profile" className="nav-link">
               User
             </NavLink>
         </li>
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
             to="/candidate/internships"
             activeClassName="is-active"
             className="nav-link"
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
         <li>
         <NavLink to="/company/profile" className="nav-link">
               User
             </NavLink>
             </li>
       </ul>
     );
=======
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
>>>>>>> 7abc2c81beedfe2df8180dbd16d70d662c108225
    const loginRegLink = (
      <ul className="navbar-nav" >
        <li className="nav-item dropdown " onClick={this.toggleOpen}>
          <a className="nav-link dropdown-toggle" 
          id="navbarDropdown" role="button" 
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Register
          </a>
          <div className={menuClass} aria-labelledby="navbarDropdown">
            <NavLink to="/candidate/register"
             activeClassName="is-active" 
             className="dropdown-item" exact>
              Register candidate
            </NavLink>
            <NavLink to="/company/register" 
            activeClassName="is-active" 
            className="dropdown-item" exact>
              Register company
            </NavLink>
          </div>
        </li>
      </ul>

<<<<<<< HEAD
=======
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
>>>>>>> 7abc2c81beedfe2df8180dbd16d70d662c108225
    );

     const userLink = (
       <div >
         <ul className="navbar-nav">
         {localStorage.usertype == 1 ? candidateLinks : companyLinks}
           <li className="nav-item">
             <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
               Logout
             </a>
           </li>
         </ul>
       </div>
     );
    return (
      
      <nav className="navbar navbar-expand-lg ">
        <img id ="path" src={require("../logos/Path 1.svg")} alt="" /> 
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" exact>
                About Us
              </NavLink>
            </li>
           
            {localStorage.usertoken ? userLink : loginRegLink}
          </ul>
          
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
