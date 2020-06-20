import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { IndexLink } from "react-router";
import Navbar from "./components/Navbar";
import Landing from "./components/Home/Landing";

import CandidateRegister from "./components/Candidates/CandidateRegister";
import CandidateProfile from "./components/Candidates/CandidateProfile";
import CandidateApplications from "./components/Candidates/CandidateApplications";
import CandidateApplication from "./components/Candidates/CandidateApplication";

import CompanyRegister from "./components/Companies/CompanyRegister";
import CompanyProfile from "./components/Companies/CompanyProfile";
import AddInternship from "./components/Internships/AddInternship"
import AboutUs from "./components/AboutUs/AboutUs";


// import CandidateApplications from "./CandidateApplications ";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/candidate/register" component={CandidateRegister} />
          <Route path="/candidate/profile" component={CandidateProfile} />
          <Route path="/applications" component={CandidateApplications} />
          <Route path="/application/:id" component={CandidateApplication} />
          <Route path="/about" component={AboutUs} />
        
          <Route path="/company/register" component={CompanyRegister} />
          <Route path="/company/profile" component={CompanyProfile} />
          <Route path="/company/internships" component={AddInternship} />
        </Switch>
      </Router>
    );
  }
}
export default App;
