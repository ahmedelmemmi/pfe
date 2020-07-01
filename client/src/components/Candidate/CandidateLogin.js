import React, { Component } from "react";
import { CandidateLogin_f } from "./CandidateFunctions";
import { Redirect, withRouter } from "react-router-dom";
class CandidateLogin extends Component {
  constructor() {
    super();
    this.state = {
      toDashboard: false,

      candidate__email: "",
      candidate__password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      candidate_email: this.state.candidate_email,
      candidate_password: this.state.candidate_password,
    };

    CandidateLogin_f(user).then((res) => {
      this.setState(() => ({
        toDashboard: true,
      }));
    });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/candidate/profile" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

              <div className="form-group">
                <label htmlFor="candidate_email">email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="candidate_email"
                  placeholder="Enter your email"
                  value={this.state.candidate_email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="candidate_password">password</label>
                <input
                  type="password"
                  className="form-control"
                  name="candidate_password"
                  placeholder="Enter your password"
                  value={this.state.candidate_password}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CandidateLogin;
