import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { skill_f } from "./CandidateFunctions";
import Dialog from "../Dialog";

export default class AddExperience extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      skill: "",
      level: "",
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newSkill = {
      skill: this.state.skill,
      level: this.state.level,
    };

    skill_f(newSkill).then((res) =>
      this.setState(() => ({
        toDashboard: true,
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
