import React, { Component } from "react";
import CompanyRegistration from "./CompanyRegistration";
import CompanyLogin from "./CompanyLogin";
class CompanyRegister extends Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <div className="already">
          {" "}
          {this.state.visibility ? (
            <CompanyLogin></CompanyLogin>
          ) : (
            <CompanyRegistration></CompanyRegistration>
          )}
        </div>
        {!this.state.visibility && (
          <button onClick={this.handleToggleVisibility}>Login </button>
        )}
      </div>
    );
  }
}

export default CompanyRegister;
