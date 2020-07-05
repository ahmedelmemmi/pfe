import React, { Component } from "react";
import { GetApplication } from "./CandidateFunctions";
import "../../styles/components/Application/_Application1.scss";
import { deleteApplication } from "./ApplicationsFunctions";
import Dialog2 from "../Dialog2";
import { Link, withRouter } from "react-router-dom";

class CandidateApplication extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteApplication_f = this.deleteApplication_f.bind(this);
    this.state = {
      application: {},
      candidate: {},
      internship: {},
      company: {},
      error: false,
    };
  }
  componentDidMount(props) {
    const id = this.props.match.params.id;
    GetApplication(id).then((res) => {
      const app = res.data.app;
      const cand = res.data.candidate;
      const inter = res.data.internship;
      const company = res.data.company;

      this.setState((prevState) => ({
        ...prevState,
        application: app,
        candidate: cand,
        internship: inter,
        company: company,
      }));
      console.log(this.state);
    });
  }
  deleteApplication_f(id) {
    deleteApplication(id).then((res) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          error: true,
        };
      });
    });
  }
  render() {
    return (
      <div className="row">
        <div className="">
          <Dialog2
            isOpen={this.state.error}
            onClose={(e) => this.props.history.push("/candidate/applications")}
          >
            Your application has been deleted{" "}
          </Dialog2>
        </div>
        {/*  application details page for candidate */}
        <h3 className="alarm">{this.state.application.candidate_message}</h3>
        <div className="col-md-2 btn2-group">
          <div className="">
            <button
              className="row b"
              onClick={(e) => {
                this.deleteApplication_f(this.state.application.id);
              }}
            >
              {" "}
              <img id="click" src={require("../../logos/close2.png")} alt="" />
              Cancel application
            </button>
            <Link
              to={"/candidate/company/" + this.state.company.id}
              activeClassName="is-active"
              exact={true}
            >
              <button className="row b">
                {" "}
                <img
                  id="click"
                  src={require("../../logos/close2.png")}
                  alt=""
                />
                See company profile
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="col-md-8 opportunity1">
          {" "}
          <div className="col-4">
            <img
              id="company"
              src={require("../../logos/facebook.png")}
              alt=""
            />
          </div>
          <h3>
            {this.state.internship.internship_title} <h5> at </h5>
            <span className="co">{this.state.company.company_name}</span>
            <img
              id="location8"
              src={require("../../logos/pin.png")}
              alt=""
            />{" "}
            <h5> {this.state.company.company_city}</h5>
          </h3>
          <br />
          <h3>
            {" "}
            <h5>STATUS : </h5>
            {this.state.application.app_status}
          </h3>
          <br />
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
      </div>
    );
  }
}
export default CandidateApplication;
