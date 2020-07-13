import React, { Component } from "react";
import CandidateRegistration from "./CandidateRegistration";
import CandidateLogin from "./CandidateLogin";
import "../../styles/components/Candidate/_CandidateRegister.scss"
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
      <div className="already row">
        <div className="col">
          {" "}
          {this.state.visibility ? (
            <CandidateLogin />
          ) : (
            <CandidateRegistration />
          )}
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
    // return (
    //   <div>
    //     <CandidateRegistration />
    //     <CandidateLogin>
    //     </CandidateLogin>
    //     {!this.state.visibility && (<div>
    //        <img src={require("../../logos/Asset 2@2x.svg")} id="interphoto"  alt="" />
    //        <button onClick={this.handleToggleVisibility}>Login </button>
    //        </div>
    //      )}
    //   </div>
    // )
  }
}

export default CandidateRegister;
