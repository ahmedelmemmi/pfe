import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class AddExperience extends Component {
  constructor() {
    super();
    this.state = {
      skill: "",
      level: "",
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // onSubmit(e) {
  //   e.preventDefault();

  //   const newEducation = {
  //       skill: this.state.skill,
  //       level: this.state.level,
  //       degree: this.state.degree
  //   };

  //   EducationRegister_f(newEducation).then((res) =>

  //       this.setState(() => ({
  //         toDashboard: true,
  //       }))

  //   );
  // }
  render() {
    return (
      <div className="container">
        <div className="rowUpdate">
          <div className="col-md-9 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Add new Skill</h1>
              <div className="updateRow">
                <div className="form-group">
                  <label htmlFor="name">Skill </label>
                  <select
                    type="text"
                    className="form-control"
                    name="skill"
                    placeholder="Enter skill"
                    value={this.state.skill}
                    onChange={this.onChange}
                  >
                    Technical Skills Computer Skills Analytical Skills Marketing
                    Skills Presentation Skills Management Skills Project
                    Management Skills Writing Skills Language Skills Design
                    Skills Certifications
                    <option value="Technical Skills">Technical Skills</option>
                    <option
                      value="Computer Skills
                    "
                    >
                      Computer Skills
                    </option>
                    <option
                      value="Analytical Skills
                    "
                    >
                      Analytical Skills
                    </option>
                    <option
                      value=" Marketing
                    Skills"
                    >
                      {" "}
                      Marketing Skills
                    </option>
                    <option value="Presentation Skills">
                      Presentation Skills
                    </option>
                    <option value="Management Skills">Management Skills</option>
                    <option value="Language Skills">Language Skills</option>
                    <option
                      value="Design
                    Skills "
                    >
                      Design Skills{" "}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Level</label>
                  <select
                    type="text"
                    className="form-control"
                    name="level"
                    placeholder="Enter level"
                    value={this.state.level}
                    onChange={this.onChange}
                  >
                    <option value="Advanced">Advanced</option>
                    <option value="Medium">Medium</option>
                    <option value="Beginner">Beginner</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block rose"
                >
                  Add Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
