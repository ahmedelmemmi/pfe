import React, { Component } from "react";
import { EducationRegister_f } from "./EducationFunctions";
import { Redirect } from "react-router-dom";

export default class AddExperience extends Component{
    constructor() {
        super();
        this.state = {
         toDashboard: false,
         university: "",
         study_area: "",
         degree: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
      }
      onSubmit(e) {
        e.preventDefault();
    
        const newEducation = {
            university: this.state.university,
            study_area: this.state.study_area,
            degree: this.state.degree
        };
    
        EducationRegister_f(newEducation).then((res) =>
        
          
            this.setState(() => ({
              toDashboard: true,
            }))
            
         
        );
      }
      render() {
        if (this.state.toDashboard === true) {
          return <Redirect to="/candidate/profile" />;
        }
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Add education</h1>
                  
                  <div className="form-group row">
                  <div className="col-25">
                    <label htmlFor="name">University</label>
                    </div>
                    <div className="col-40">
                    <select
                      type="text"
                      className="form-control"
                      name="university"
                      placeholder="Enter university"
                      value={this.state.university}
                      onChange={this.onChange}
                    >
                                        <option value="University of Sousse">University of Sousse</option>
                                        <option value="University of Monastir">University of Monastir</option>
                                       
                      </select>
                      </div>
                  </div>
                  <div className="form-group row">
                  <div className="col-25">
                    <label htmlFor="name">Study Area</label>
                    </div>
                    <div className="col-40">
                    <select
                      type="text"
                      className="form-control"
                      name="study_area"
                      placeholder="Enter study_area"
                      value={this.state.study_area}
                      onChange={this.onChange}
                    >
                                        <option value="IT">IT</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Architect">Architect</option>
                                    
                      </select>
                      </div>
                  </div>
                  <div className="form-group row">
                  <div className="col-25">
                    <label htmlFor="name">Degree</label>
                    </div>
                    <div className="col-40">
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
                                        <option value="High School Diploma">High School Diploma</option>
                                    
                      </select>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-50">
                        <div className="mt-4">
                          <input
                            type="submit"
                            value="Cancel"
                            className="mt-1 p-2 border cursor-pointer bg-purple-600 "
                          />
                        </div>
                      </div>
                      <div className="col-50">
                        <div className="mt-4">
                          <input
                            type="submit"
                            value="Add education"
                            className="mt-1 p-2 border cursor-pointer bg-purple-600 "
                          />
                        </div>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }
   
}