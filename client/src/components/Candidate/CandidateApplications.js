import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { applications_f } from "../../store/actions/ApplicationsActions";
import { filter_app } from "../../store/actions/Filter_appActions";
class CandidateApplications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      application_status: "",
      application_intern: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChange_f1(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.filter_app(
      this.state.application_status,
      this.state.application_intern
    );
    this.props.applications_f();
  }
  componentDidMount(props) {
    this.props.applications_f();
  }

  render() {
    console.log(this.props.applications);
    return (
      <div className="row">
        <div className="col-md-3 mt-5 mx-auto">
          <div className="position-fixed">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">
                Narrow your applications results
              </h1>

              <div className="form-group">
                <label htmlFor="candidate_email">Application status</label>
                <select
                  type="text"
                  className="form-control"
                  name="application_status"
                  placeholder="status"
                  value={this.state.application_status}
                  onChange={this.onChange}
                >
                  <option value="In progress">In progress</option>
                  <option value="Finished">Finished</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="candidate_password">Internship name</label>
                <input
                  type="text"
                  className="form-control"
                  name="application_intern"
                  placeholder="name"
                  value={this.state.application_intern}
                  onChange={this.onChange}
                />
              </div>
              <div className="btn">
                <input
                  type="submit"
                  value="Search"
                  className="mt-1 p-2 border  cursor-pointer bg-purple-600 "
                />
              </div>
              {/* <button type="submit" className="btn btn-lg btn-primary btn-block">
              Search
            </button> */}
            </form>
          </div>
        </div>

        <div className="col-md-6 mt-5 mx-auto">
          {/* List */}

          {this.props.applications.length === 0 && (
            <p>You have no applications with such criterias</p>
          )}
          {this.props.applications.map((app) => (
            <div className="container" id="box_opp">
              <p>
                {" "}
                {app.internship.internship_title} at :{" "}
                {app.internship.company.company_name} ,{" "}
                {app.internship.company.company_name}
              </p>
              <div>
                <h3 className="d-flex justify-content-end">
                  {" "}
                  {app.app_status}
                </h3>
              </div>
              <p>
                {" "}
                {app.internship.internship_duration} |{" "}
                {app.internship.internship_type}
              </p>
              <p> Description : {app.internship.internship_description}</p>
              <Link
                to={"/candidate/application/" + app.id}
                activeClassName="is-active"
                // className="d-flex justify-content-md-end"
                exact={true}
              >
                <button id="detailsBtn">See details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    applications: state.applications.applications,
    application_status: state.app_filter.application_status,
    application_intern: state.app_filter.application_intern,
  }),
  { applications_f, filter_app }
)(CandidateApplications);
