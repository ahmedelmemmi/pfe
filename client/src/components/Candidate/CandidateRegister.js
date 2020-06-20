import React, { Component } from "react";
import CandidateRegistration from "./CandidateRegistration";
import CandidateLogin from "./CandidateLogin";
class CandidateRegister extends Component {
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
            <CandidateLogin></CandidateLogin>
          ) : (
            <CandidateRegistration></CandidateRegistration>
          )}
        </div>
        {!this.state.visibility && (
          <button onClick={this.handleToggleVisibility}>Login </button>
        )}
      </div>
    );
  }
}

export default CandidateRegister;
