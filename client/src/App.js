import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Home/Landing";
import CandidateRegister from "./components/Candidate/CandidateRegister";
import CandidateProfile from "./components/Candidate/CandidateProfile";
import CandidateApplications from "./components/Candidate/CandidateApplications";
import CandidateApplication from "./components/Candidate/CandidateApplication";
import InternshipsPage from "./components/Candidate/InternshipsPage";
import CompanyRegister from "./components/Company/CompanyRegister";
import CompanyProfile from "./components/Company/CompanyProfile";
import AddInternship from "./components/Internships/AddInternship"
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Landing} exact />
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
          <Route
            path="/candidate/internshipsPage"
            component={InternshipsPage}
          />
          <Route path="/company/register" component={CompanyRegister} />
          <Route path="/company/profile" component={CompanyProfile} />
          <Route path="/company/internships" component={AddInternship} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}
export default App;
