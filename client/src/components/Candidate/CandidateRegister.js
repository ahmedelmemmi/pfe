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
         <div className="already row">
           {" "}
           {this.state.visibility ? (
             <CandidateLogin></CandidateLogin>
           ) : (
             <CandidateRegistration></CandidateRegistration>
           )}
         </div>
         <div className="col">
         {!this.state.visibility && (<div >
           <img src={require("../../logos/Asset 2@2x.svg")} id="interphoto"  alt="" /> 
           <button onClick={this.handleToggleVisibility}>Login </button>
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
