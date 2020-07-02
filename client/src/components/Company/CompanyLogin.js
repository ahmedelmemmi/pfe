import React, { Component } from "react";
import { CompanyLogin_f } from "./CompanyFunctions";
import { Redirect, withRouter } from "react-router-dom";
import Dialog from "../Dialog";
class CompanyLogin extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      company_email: "",
      company_password: "",
      error: false,
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
      company_email: this.state.company_email,
      company_password: this.state.company_password,
    };

    CompanyLogin_f(user).then((res) => {
      if (res) {
        this.props.history.push("/company/profile");
      } else
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
      <div className="container">
        <div className="">
          <Dialog
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
            Email and password are incorrect! Please try again.
          </Dialog>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

              <div className="form-group">
                <label htmlFor="company_email">email address</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_email"
                  placeholder="Enter your email"
                  value={this.state.company_email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company_password">password</label>
                <input
                  type="password"
                  className="form-control"
                  name="company_password"
                  placeholder="Enter your password"
                  value={this.state.company_password}
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

export default withRouter(CompanyLogin);
