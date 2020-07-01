import React, { Component } from "react";
import { GetApplication } from "../Candidate/CandidateFunctions";
import { saveComments_f } from "./CompanyFunctions";
import { acceptApplication } from "./CompanyFunctions";
import { declineApplication } from "./CompanyFunctions";
import { Link, withRouter } from "react-router-dom";

class CandidateApplication extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      application: {},
      candidate: {},
      internship: {},
      company: {},
      comments: "",
    };
    this.onChange = this.onChange.bind();
    this.onSubmit = this.onSubmit.bind();
  }

  onChange = (e) => {
    const v = e.target.value;
    this.setState((prevState) => ({
      application: prevState.application,
      candidate: prevState.candidate,
      internship: prevState.internship,
      company: prevState.company,
      comments: v,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    saveComments_f(this.state.comments, this.state.application.id);
    console.log(this.state);
  };

  componentDidMount(props) {
    const id = this.props.match.params.id;
    GetApplication(id).then((res) => {
      const app = res.data.app;
      const cand = res.data.candidate;
      const inter = res.data.internship;
      const company = res.data.company;
      const comm = res.data.app.app_comments;

      this.setState(() => ({
        application: app,
        candidate: cand,
        internship: inter,
        company: company,
        comments: comm,
      }));
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {/* maquette : application details page for company */}

        <h3>{this.state.application.company_message}</h3>
        <p>
          {" "}
          <h2>{this.state.candidate.candidate_name} </h2> ,
          {this.state.candidate.candidate_service}
        </p>

        <br />
        <p>
          applied for : <h3> {this.state.internship.internship_title}</h3>{" "}
          {this.state.application.created_at}
        </p>
        <p> Application status : {this.state.application.app_status}</p>

        <button
          onClick={(e) => {
            acceptApplication(this.state.application.id).then((res) => {
              if (res) {
                window.location.reload(false);
              }
            });
          }}
        >
          Accept
        </button>

        <button
          onClick={(e) => {
            declineApplication(this.state.application.id).then((res) => {
              if (res) {
                window.location.reload(false);
              }
            });
          }}
        >
          Decline
        </button>
        <br />
        <p>applied at : {this.state.application.created_at}</p>

        {/* comments form */}
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="comments">Add your comments : </label>
              <input
                type="text"
                className="form-control"
                name="app_comments"
                placeholder=""
                value={this.state.comments}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Save comments
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default CandidateApplication;
