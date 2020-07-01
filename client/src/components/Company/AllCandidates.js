import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { all_candidates_f } from "../../store/actions/All_candidatesActions";
import { filter_all_candidates } from "../../store/actions/Filter_all_candidatesActions";
class AllCandidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidate_service: "",
      candidate_full_name: "",
      candidate_nb_experience: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.filter_all_candidates(
      this.state.candidate_service,
      this.state.candidate_full_name,
      this.state.candidate_nb_experience
    );
    this.props.all_candidates_f();
  }
  componentDidMount(props) {
    this.props.all_candidates_f();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Filter :</h1>

            <div className="form-group">
              <label htmlFor="candidate_service">Candidate Service</label>
              <input
                type="text"
                className="form-control"
                name="candidate_service"
                placeholder="status"
                value={this.state.candidate_service}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="candidate_password">Candidate name</label>
              <input
                type="text"
                className="form-control"
                name="candidate_full_name"
                placeholder="candidate_name"
                value={this.state.candidate_full_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="candidate_nb_experience">
                Number of experiences
              </label>
              <select
                type="text"
                className="form-control"
                name="candidate_nb_experience"
                placeholder="Number of experience"
                value={this.state.candidate_nb_experience}
                onChange={this.onChange}
              >
                <option value="less than 2 years experience">
                  {" "}
                  less than 2 years experience
                </option>
                <option value="2-5 years experience">
                  2-5 years experience
                </option>
                <option value="more than 5 years experience">
                  more than 5 years experience
                </option>
                <option value="No experience needed">
                  No experience needed
                </option>
                <option value="">Default</option>
              </select>
            </div>

            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Sign in
            </button>
          </form>
        </div>
        {/* List */}

        <p>Please add your application to get started!</p>
        {this.props.candidates.map((candidate) => (
          <div>
            <p>
              {" "}
              <h3> {candidate.candidate_name}</h3> ,{candidate.candidate_city}{" "}
            </p>
            <p> {candidate.candidate_service} </p>
            <p> {candidate.candidate_nb_experience} </p>

            {/*  <Link
              to={"/company/application/" + candidate.id}
              activeClassName="is-active"
              exact={true}
            >
              <button>See application details</button>
            </Link>
            <Link to="/" activeClassName="is-active" exact={true}>
              <button>See Profil</button>
    </Link> */}
          </div>
        ))}
      </div>
    );
  }
}
export default connect(
  (state) => ({
    candidates: state.all_candidates.candidates,
    candidate_service: state.all_candidates_filter.candidate_service,
    candidate_full_name: state.all_candidates_filter.candidate_full_name,
    candidate_nb_experience:
      state.all_candidates_filter.candidate_nb_experience,
  }),
  { all_candidates_f, filter_all_candidates }
)(AllCandidates);
