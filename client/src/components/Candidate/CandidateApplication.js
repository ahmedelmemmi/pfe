import React, { Component } from "react";
import { GetApplication } from "./CandidateFunctions";
class CandidateApplication extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      application: {},
      candidate: {},
      internship: {},
      company: {},
    };
  }
  componentDidMount(props) {
    const id = this.props.match.params.id;
    GetApplication(id).then((res) => {
      const app = res.data.app;
      const cand = res.data.candidate;
      const inter = res.data.internship;
      const company = res.data.company;

      this.setState(() => ({
        application: app,
        candidate: cand,
        internship: inter,
        company: company,
      }));
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {/*  application details page for candidate */}
        <h3 className="notif">{this.state.application.candidate_message}</h3>
        <h2>
          {this.state.internship.internship_title} at{" "}
          {this.state.company.company_name}
        </h2>
        <br />
        <p> {this.state.application.app_status}</p>
        <br />
        <p>applied at : {this.state.application.created_at}</p>

        <button
          onClick={(e) => {
            this.deleteApplication(this.state.application);
          }}
        >
          Cancel application
        </button>
        <p> {this.state.application.app_comments}</p>
        <br />
        <h4>
          {this.state.internship.internship_title} at{" "}
          {this.state.company.company_name} , {this.state.company.company_city}
        </h4>
        <p>
          {" "}
          {this.state.internship.internship_duration} |{" "}
          {this.state.internship.internship_type}
        </p>
        <p> Description : {this.state.internship.internship_description}</p>
      </div>
    );
  }
}
export default CandidateApplication;
