import React, { Component } from "react";
import jwt_decode from "jwt-decode";

import "../../styles/components/Candidate/_Candidate.scss";
import "../../styles/components/Candidate/_CandidateSkills.scss";

import { SeeCandidate } from "./CompanyFunctions";
class CandidateProfile extends Component {
  constructor() {
    super();
    this.state = {
      PersonalForm: false,
      ExperienceForm: false,
      SkillForm: false,
      EducationForm: false,
    };
    this.showDetailsForm = this.showDetailsForm.bind(this);
    this.showEdForm = this.showEdForm.bind(this);
    this.showExForm = this.showExForm.bind(this);
    this.showSkillForm = this.showSkillForm.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    SeeCandidate(id)
      .then((res) => {
        console.log(res);
        this.setState((prevState) => ({
          ...prevState,
          candidate_email: res.data.candidate_email,
          candidate_name: res.data.candidate_name,
          candidate_service: res.data.candidate_service,
          candidate_gender: res.data.candidate_gender,
          candidate_nb_experience: res.data.candidate_nb_experience,
          candidate_adress: res.data.candidate_adress,
          candidate_city: res.data.candidate_city,
          candidate_phone: res.data.candidate_phone,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showDetailsForm = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        PersonalForm: true,
      };
    });
  };
  showEdForm = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        EducationForm: true,
      };
    });
  };
  showExForm = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        ExperienceForm: true,
      };
    });
  };

  showSkillForm = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        SkillForm: true,
      };
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="btn-group ">
            <button>Profil details</button>
            <button>Settings</button>
          </div>
        </div>
        <div className="col-8 carreau">
          <div className=" jumbotron">
            <div className="col-sm-8 mx-auto">
              <img src={require("../../logos/user.png")} id="edit" alt="" />
              <h1 className="text-left">ALA MAATOUK , web dev</h1>
            </div>
            <div className="col-sm-8 mx-auto">
              <h3 className="text-left2">Personal Details:</h3>
            </div>

            <div>
              <table className="table col-md-9 mx-auto">
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td className="caseStyle">{this.state.candidate_name}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td className="caseStyle" onChange={this.updateInputValue}>
                      {this.state.candidate_gender}
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td className="caseStyle">{this.state.candidate_email}</td>
                  </tr>
                  <tr>
                    <td>Number of experiences</td>
                    <td className="caseStyle">
                      {this.state.candidate_nb_experience}
                    </td>
                  </tr>
                  <tr>
                    <td>Adress</td>
                    <td className="caseStyle">{this.state.candidate_adress}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td className="caseStyle">{this.state.candidate_city}</td>
                  </tr>
                  <tr>
                    <td>Service</td>
                    <td className="caseStyle">
                      {this.state.candidate_service}
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td className="caseStyle">{this.state.candidate_phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className="col-sm-8 mx-auto">
              <h3 className="text-left2">Experiences:</h3>
            </div>

            <div>
              {" "}
              <table className="table col-md-9 mx-auto">
                <tbody>
                  <tr>
                    <td>Company</td>
                    <td className="caseStyle">{this.state.candidate_name}</td>
                  </tr>
                  <tr>
                    <td>Title</td>
                    <td className="caseStyle">{this.state.candidate_gender}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td className="caseStyle">{this.state.candidate_email}</td>
                  </tr>
                  <tr>
                    <td>Begin Date</td>
                    <td className="caseStyle">
                      {this.state.candidate_nb_experience}
                    </td>
                  </tr>
                  <tr>
                    <td>End Date</td>
                    <td className="caseStyle">{this.state.candidate_adress}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className="col-sm-8 mx-auto">
              <h3 className="text-left2">Skills:</h3>
            </div>
            <div>
              {" "}
              <table className="table col-md-9 mx-auto">
                <tbody>
                  <tr>
                    <td>Company</td>
                    <td className="caseStyle">{this.state.candidate_name}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className="col-sm-8 mx-auto">
              <h3 className="text-left2">Educations:</h3>
            </div>
            <div>
              {" "}
              <table className="table col-md-9 mx-auto">
                <tbody>
                  <tr>
                    <td>University</td>
                    <td className="caseStyle">{this.state.candidate_name}</td>
                  </tr>
                  <tr>
                    <td>Area Of Study</td>
                    <td className="caseStyle" onChange={this.updateInputValue}>
                      {this.state.candidate_gender}
                    </td>
                  </tr>
                  <tr>
                    <td>Degree</td>
                    <td className="caseStyle">{this.state.candidate_email}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default CandidateProfile;
