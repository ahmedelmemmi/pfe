import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Home/Landing";
import CandidateRegister from "./components/Candidate/CandidateRegister";
import CandidateProfile from "./components/Candidate/CandidateProfile";
import CandidateApplications from "./components/Candidate/CandidateApplications";
import CandidateApplication from "./components/Candidate/CandidateApplication";
import InternshipsPage from "./components/Candidate/InternshipsPage";
import CompanyRegister from "./components/Company/CompanyRegister";
import CompanyProfile from "./components/Company/CompanyProfile";
import CompanyCandidates from "./components/Company/CompanyCandidates";
import CompanyApplication from "./components/Company/CompanyApplication";
import CandidatesPage from "./components/Company/CandidatesPage";
import SeeCompany from "./components/Candidate/SeeCompany";
import SeeCandidate from "./components/Company/SeeCandidate";
import AddInternship from "./components/Internships/AddInternship";
import CompanyInternships from "./components/Company/CompanyInternships";
import Invitations from "./components/Candidate/Invitations";
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
          <Route path="/candidate/invitations" component={Invitations} />
          <Route path="/candidate/company/:id" component={SeeCompany} />
          <Route path="/company/register" component={CompanyRegister} />
          <Route path="/company/profile" component={CompanyProfile} />
          <Route path="/company/candidates" component={CompanyCandidates} />
          <Route path="/company/candidate/:id" component={SeeCandidate} />
          <Route
            path="/company/application/:id"
            component={CompanyApplication}
          />
          <Route path="/company/candidatesPage" component={CandidatesPage} />
          <Route path="/company/internships/add" component={AddInternship} />
          <Route path="/company/internships" component={CompanyInternships} />
        </Switch>
      </Router>
    );
  }
}
export default App;
