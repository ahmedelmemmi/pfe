import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { candidates_f } from "../../store/actions/CandidatesActions";
import { filter_candidates } from "../../store/actions/Filter_candidatesActions";
import "../../styles/components/Company/_CompanyCandidates.scss";
class CompanyCandidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidate_app_status: "",
      candidate_name: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.filter_candidates(
      this.state.candidate_app_status,
      this.state.candidate_name
    );
    this.props.candidates_f();
  }
  componentDidMount(props) {
    this.props.candidates_f();
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        {/* Form */}
        <div className="col-md-3 mt-5 mx-auto">
          <div className="position-fixed">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Filter :</h1>

              <div className="form-group">
                <label htmlFor="candidate_email">byStatus</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_app_status"
                  placeholder="status"
                  value={this.state.candidate_app_status}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="candidate_password">byCandidateName</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_name"
                  placeholder="candidate_name"
                  value={this.state.candidate_name}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        {/* List */}
        <div className="col-md-6 mt-5 mx-auto">
          {this.props.candidates.map((candidate) => (
            <div className="container" id="box_opp2">
              <div className="d-flex justify-content-start">
                <p>
                  {" "}
                  <h3>
                    {" "}
                    {candidate.candidate.candidate_name},
                    {candidate.candidate.candidate_city}{" "}
                  </h3>
                </p>
              </div>

              <p> Service: {candidate.candidate.candidate_service} </p>
              <p>
                {" "}
                Number of experiences:{" "}
                {candidate.candidate.candidate_nb_experience}{" "}
              </p>
              <div className="row justify-content-end">
                <Link
                  to={"/company/application/" + candidate.id}
                  activeClassName="is-active"
                  exact={true}
                >
                  <button id="detailBtn">See application details</button>
                </Link>
                <Link to="/" activeClassName="is-active" exact={true}>
                  <button id="detailBtn">See Profil</button>
                </Link>
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
    candidates: state.candidates.candidates,
    candidate_app_status: state.candidates_filter.candidate_app_status,
    candidate_name: state.candidates_filter.candidate_name,
  }),
  { candidates_f, filter_candidates }
)(CompanyCandidates);
