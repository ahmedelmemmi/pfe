import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { IndexLink } from "react-router";
import Navbar from "./components/Navbar";

import CandidateRegister from "./components/CandidateRegister";
import Landing from "./components/Landing";
import CandidateProfile from "./components/CandidateProfile";
import CandidateApplications from "./components/CandidateApplications";
import CandidateApplication from "./components/CandidateApplication";

// import CandidateApplications from "./CandidateApplications ";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/candidate" component={Navbar} exact />
          <Route path="/candidate/register" component={CandidateRegister} />
          <Route path="/candidate/profile" component={CandidateProfile} />
          <Route
            path="/candidate/applications"
            component={CandidateApplications}
          />
          <Route
            path="/candidate/application/:id"
            component={CandidateApplication}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
