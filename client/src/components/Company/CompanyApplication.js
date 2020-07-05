import React, { Component } from "react";
import { GetApplication } from "../Candidate/CandidateFunctions";
import { saveComments_f } from "./CompanyFunctions";
import { acceptApplication } from "./CompanyFunctions";
import { declineApplication } from "./CompanyFunctions";
import { Link, withRouter } from "react-router-dom";
import "../../styles/components/Application/_Application2.scss";

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

        <h3 className="alertCompany">
          {this.state.application.company_message}
        </h3>
        <div className="col-md-3 btn-group">
          <div className="">
            <button
              className="row b"
              onClick={(e) => {
                acceptApplication(this.state.application.id).then((res) => {
                  if (res) {
                    window.location.reload(false);
                  }
                });
              }}
            >
              <img id="click" src={require("../../logos/close2.png")} alt="" />
              Accept
            </button>

            <button
              className="row b"
              onClick={(e) => {
                declineApplication(this.state.application.id).then((res) => {
                  if (res) {
                    window.location.reload(false);
                  }
                });
              }}
            >
              <img id="click" src={require("../../logos/close2.png")} alt="" />
              Decline
            </button>
          </div>
        </div>

        <div className="col-md-8 application">
          {" "}
          <div className="col-4">
            <img id="company" src={require("../../logos/user.png")} alt="" />
          </div>
          <h2>
            {this.state.candidate.candidate_name} <h4> , </h4>
            {this.state.candidate.candidate_service}
            <h4> has applied to : {this.state.internship.internship_name}</h4>
          </h2>
          <br />
          <h2>
            {" "}
            <h4>STATUS : </h4>
            {this.state.application.app_status}
          </h2>
          <br />
          <div className="para">
            <p>applied at : {this.state.application.created_at}</p>

            <p>
              {" "}
              {this.state.internship.internship_duration} |{" "}
              {this.state.internship.internship_type}
            </p>
            <p>
              {" "}
              <b> Description </b> :{" "}
              {this.state.internship.internship_description}
            </p>
          </div>
        </div>

        {/* comments form */}
        <div className="col-md-4 comments mt-5 mx-auto">
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
