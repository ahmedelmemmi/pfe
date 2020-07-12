import React, { Component } from "react";
import CandidateSavedInternships from "./CandidateSavedInternships";
import CandidateInternships from "./CandidateInternships";
import "../../styles/components/Candidate/_CandidateInternship.scss";

class InternshipsPage extends Component {
  constructor(props) {
    super(props);
    this.ToggleVisibility_search = this.ToggleVisibility_search.bind(this);
    this.ToggleVisibility_saved = this.ToggleVisibility_saved.bind(this);

    this.state = {
      visibility_search: true,
    };
  }
  ToggleVisibility_search() {
    this.setState(() => {
      return {
        visibility_search: true,
      };
    });
  }
  ToggleVisibility_saved() {
    this.setState(() => {
      return {
        visibility_search: false,
      };
    });
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <button 
          className="InternBtn" onClick={this.ToggleVisibility_search}>
            Search internships
          </button>
          <button className="InternBtn" onClick={this.ToggleVisibility_saved}>
            Saved Internships
          </button>
        </div>
        <div className="">
          {" "}
          {this.state.visibility_search ? (
            <CandidateInternships></CandidateInternships>
          ) : (
            <CandidateSavedInternships></CandidateSavedInternships>
          )}
        </div>
      </div>
    );
  }
}

export default InternshipsPage;
