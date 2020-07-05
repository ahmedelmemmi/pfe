import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { createApplication_f } from "./ApplicationsFunctions.js";
import { createSavedApplication_f } from "./ApplicationsFunctions.js";
import { checkApplication_f } from "./ApplicationsFunctions.js";
import Dialog2 from "../Dialog2";

import { connect } from "react-redux";
import { internships_f } from "../../store/actions/InternshipsActions";
import { filter_intern } from "../../store/actions/Filter_internActions";

class CandidateInternships extends Component {
  constructor(props) {
    super(props);
    this.createApplication = this.createApplication.bind(this);
    this.createSavedApplication = this.createSavedApplication.bind(this);
    this.checkApplication = this.checkApplication.bind(this);

    this.state = {
      internship_title: "",
      internship_field: "",
      internship_duration: "",
      error: false,
      msg: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChange_f2(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  clearFields(e) {
    this.props.filter_intern("", "", "");
    this.props.internships_f();
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.filter_intern(
      this.state.internship_title,
      this.state.internship_field,
      this.state.internship_duration
    );

    this.props.internships_f();
  }
  componentDidMount() {
    this.props.internships_f();
  }

  createApplication_f1(internship_id) {
    createApplication_f(internship_id).then((res) => {
      console.log("application created");
    });
  }
  createApplication(internship_id) {
    const token = localStorage.usertoken;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    createApplication_f(internship_id, config).then((res) => {
      console.log("application created");
    });
  }

  createSavedApplication(internship_id) {
    const token = localStorage.usertoken;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    createSavedApplication_f(internship_id, config).then((res) => {
      console.log("application saved created");
    });
  }
  checkApplication(id) {
    const token = localStorage.usertoken;

    const config2 = {
      headers: { Authorization: `Bearer ${token}` },
    };
    checkApplication_f(id, config2).then((res) => {
      console.log(res);
      if (res.data.test === true) return true;
      else return false;
    });
  }

  render() {
    return (
      <div className="row">
        <div className="">
          <Dialog2
            isOpen={this.state.error}
            onClose={(e) =>
              this.setState((prevState) => {
                return {
                  ...prevState,
                  error: false,
                };
              })
            }
          >
            {this.state.msg}
          </Dialog2>
        </div>
        <div className="col-md-3 mt-5 mx-auto">
          <div className="position-fixed">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">
                Narrow your results
              </h1>

              <div className="form-group">
                <label htmlFor="internship_title">Internship title</label>
                <input
                  type="text"
                  className="form-control"
                  name="internship_title"
                  placeholder="title"
                  value={this.state.internship_title}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="internship_field">Internship field</label>
                <select
                  type="text"
                  className="form-control"
                  name="internship_field"
                  placeholder="internship_field"
                  value={this.state.internship_field}
                  onChange={this.onChange}
                >
                  <option value=""></option>
                  <option value="Accounting & Finance">
                    Accounting & Finance
                  </option>
                  <option value="Design & Creative">Design & Creative</option>
                  <option value="Technology & IT">Technology & IT</option>
                  <option value="Legal">Legal</option>

                  <option value="Administrative & Office">
                    Administrative & Office
                  </option>
                  <option value="Writing">Writing</option>
                  <option value="Engineering & Architecture">
                    Engineering & Architecture
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="internship_duration">Internship duration</label>
                <select
                  type="text"
                  className="form-control"
                  name="internship_duration"
                  placeholder="internship_duration"
                  value={this.state.internship_duration}
                  onChange={this.onChange}
                >
                  <option value=""></option>

                  <option value="One month duration">One month duration</option>
                  <option value="three month duration">
                    three month duration
                  </option>
                  <option value="six month duration">six month duration</option>
                </select>
              </div>
              <div className="row">
                <div className="col-50">
                  <div className="mt-4">
                    <input
                      type="reset"
                      value="Clear"
                      className="mt-1 p-2 border  cursor-pointer bg-purple-600 "
                      onClick={(e) => {
                        this.clearFields();
                      }}
                    />
                  </div>
                </div>
                <div className="col-50">
                  <div className="mt-4">
                    <input
                      type="submit"
                      value="Search"
                      className="mt-1 p-2 border  cursor-pointer bg-purple-600 "
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* bari fouuuuuuuuuuut */}
        <div className=" col-md-6 mt-5 mx-auto ">
          {this.props.internship.length === 0 && (
            <p>No matching results. Search again</p>
          )}

          {this.props.internship.map((internship) => (
            <div className="container" id="box_opp">
              <div className="row">
                <div className="col-4">
                  <img
                    src={require("../../logos/facebook.png")}
                    alt=""
                    id="company"
                  />
                </div>
                <div className="col-8">
                  <div className="texte d-flex justify-content-start">
                    <h5>
                      {" "}
                      {internship.internship_title} at :{" "}
                      <span className="co">
                        {internship.company.company_name}
                      </span>
                      <br />
                      <img
                        id="location1"
                        src={require("../../logos/pin.png")}
                        alt=""
                      />{" "}
                      {internship.company.company_city}
                    </h5>
                  </div>
                  <div className="texte2 d-flex justify-content-end">
                    <h6>
                      {" "}
                      {internship.internship_begin_date} |{" "}
                      {internship.internship_end_date}
                    </h6>
                  </div>

                  <p className="texte3">
                    {" "}
                    {internship.internship_duration} |{" "}
                    {internship.internship_type}
                    <br />
                    Description : {internship.internship_description}
                  </p>
                  <div className="row justify-content-end">
                    <div className="col-20">
                      <Link
                        to={"/internship/" + internship.id}
                        activeClassName="is-active"
                        exact={true}
                      >
                        <button id="apply_btn2">See Internship </button>
                      </Link>
                    </div>
                    <div className="col-20">
                      <button
                        id="apply_btn2"
                        onClick={(e) => {
                          const test = this.checkApplication(internship.id);
                          if (test === true) {
                            this.createApplication(internship.id);
                            this.setState((prevState) => {
                              return {
                                ...prevState,
                                error: true,
                                msg: "Your application has been sent",
                              };
                            });
                          } else {
                            this.setState((prevState) => {
                              return {
                                ...prevState,
                                error: true,
                                msg:
                                  "You have already applied to this opportunity!!",
                              };
                            });
                          }
                        }}
                      >
                        Apply
                      </button>
                    </div>
                    <div className="col-20">
                      <button
                        id="apply_btn2"
                        onClick={(e) => {
                          this.createSavedApplication(internship.id);
                        }}
                      >
                        Add to favorites
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    internship: state.internships.internship,
    internship_title: state.intern_filter.internship_title,
    internship_field: state.intern_filter.internship_field,
    internship_duration: state.intern_filter.internship_duration,
  }),
  { internships_f, filter_intern }
)(CandidateInternships);
