import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/Home/_Navbar.scss'


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
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""} `;
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
             to="/candidate/internshipsPage"
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
    const loginRegLink = (
      // <ul className="navbar-nav " >
      //   <li className="nav-item dropdown " onClick={this.toggleOpen}>
      //     <a className="nav-link dropdown-toggle" 
      //     id="navbarDropdown" role="button" 
      //     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //       Register
      //     </a>
      //     <div className={menuClass} aria-labelledby="navbarDropdown" id="dropmenu">
      //       <NavLink to="/candidate/register"
      //        activeClassName="is-active" 
      //        className="dropdown-item" exact>
      //         Candidate
      //       </NavLink>
      //       <div class="dropdown-divider"></div>
      //       <NavLink to="/company/register" 
      //       activeClassName="is-active" 
      //       className="dropdown-item" exact>
      //         Company
      //       </NavLink>
      //     </div>
      //   </li>
      // </ul>

      <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink to="/candidate/register"
              activeClassName="is-active" 
              className="nav-link" exact>
               Candidate
             </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/company/register" 
             activeClassName="is-active" 
             className="nav-link" exact>
               Company
             </NavLink>
          </li>
    </ul>

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
      
        
          <nav className="navbar navbar-expand-lg sticky-top">
        
        
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarsExample10"
        >
           <a className="navbar-brand" href="/">
            <img src={require("../logos/logo_devagnos.png")}  id="logo_devagnos"alt=""/>
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
