import React, { Component } from "react";
import CompanyRegistration from "./CompanyRegistration";
import CompanyLogin from "./CompanyLogin";
import "../../styles/components/Company/_CompanyRegistration.scss";
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
      <div className="already row">
        <div className="col">
          {" "}
          {this.state.visibility ? <CompanyLogin /> : <CompanyRegistration />}
        </div>
        <div className="col">
          {!this.state.visibility && (
            <div className="row">
              <div className="col-md-3 mt-5 mx-auto">
                <img
                  src={require("../../logos/Asset 2@2x.svg")}
                  id="interphoto"
                  alt=""
                />
              </div>
              <div className="col-md-6 mt-5 mx-auto">
                <div className="form-inline line">
                  <h5>Already have an account?</h5>
                  <button
                    onClick={this.handleToggleVisibility}
                    className="loginBtn"
                  >
                    Login{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CompanyRegister;
