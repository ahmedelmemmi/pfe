import React, { Component } from "react";
// import { EducationRegister_f } from "./EducationFunctions";
import { Redirect } from "react-router-dom";
import { education_f } from "./CandidateFunctions";
import Dialog from "../Dialog";
export default class AddExperience extends Component {
  constructor() {
    super();
    this.state = {
      error: false,

      university: "",
      area_study: "",
      degree: "",
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newEducation = {
      university: this.state.university,
      area_study: this.state.area_study,
      degree: this.state.degree,
    };

    education_f(newEducation).then((res) =>
      this.setState(() => ({
        error: true,
      }))
    );
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
        <div className=" row rowUpdate">
          <div className="col-md-9 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Add new Education</h1>
              <div className="updateRow">
                <div className="form-group">
                  <label htmlFor="name">university</label>
                  <select
                    type="text"
                    className="form-control"
                    name="university"
                    placeholder="Enter university"
                    value={this.state.university}
                    onChange={this.onChange}
                  >
                    <option value="University of Sousse">
                      University of Sousse
                    </option>
                    <option value="University of Monastir">
                      University of Monastir
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">area_study</label>
                  <select
                    type="text"
                    className="form-control"
                    name="area_study"
                    placeholder="Enter area_study"
                    value={this.state.area_study}
                    onChange={this.onChange}
                  >
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Architect">Architect</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">degree</label>
                  <select
                    type="text"
                    className="form-control"
                    name="degree"
                    placeholder="Enter degree"
                    value={this.state.degree}
                    onChange={this.onChange}
                  >
                    <option value="Licence">Licence</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="High School Diploma">
                      High School Diploma
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block rose"
                >
                  Add Experience
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
