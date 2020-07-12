import React, { Component } from "react";
import { InternshipRegister_f } from "./InternshipFunctions";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class AddInternship extends Component{
    constructor() {
        super();
        this.state = {
         toDashboard: false,
         internship_title: "",
         internship_field: "",
         internship_description: "",
         internship_type: "",
         internship_duration: "",
         internship_city:"",
         internship_level: "",
         internship_begin_date: "",
         internship_end_date: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
      }
      onSubmit(e) {
        e.preventDefault();
    
        const newInternship = {
            internship_title: this.state.internship_title,
            internship_field: this.state.internship_field,
            internship_description: this.state.internship_description,
            internship_type: this.state.internship_type,
            internship_duration: this.state.internship_duration,
            internship_level: this.state.internship_level,
            internship_city: this.state.internship_city, // lezem tzid fil controller mta3 l internship l city 
            internship_begin_date: this.state.internship_begin_date,
            internship_end_date: this.state.internship_end_date
        };
    
        InternshipRegister_f(newInternship).then((res) =>
        
          
            this.setState(() => ({
              toDashboard: true,
            }))
            
         
        );
      }
      handleChange = date => {
        this.setState({
            internship_begin_date: date
        });
      };
      handleChange2 = date => {
        this.setState({
            
            internship_end_date:date
        });
      };
      render() {
        if (this.state.toDashboard === true) {
          return <Redirect to="/company/internships" />;
        }
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Add new Internship</h1>
                  <div className="form-group">
                    <label htmlFor="name">Internship title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="internship_title"
                      placeholder="Enter your internship title"
                      value={this.state.internship_title}
                      onChange={this.onChange}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="name">Description</label>
                    <textarea
                      type="email"
                      className="form-control"
                      name="internship_description"
                      placeholder="Enter your internship description"
                      value={this.state.internship_description}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                <label htmlFor="internship_duration">Internship duration</label>
                <select
                  type="text"
                  className="form-control"
                  name="internship_duration"
                  placeholder="internship_duration"
                  value={this.state.internship_duration}
                  onChange={this.onChange}
                >
                  <option value="One month ">One month</option>
                  <option value="three months">three months</option>
                  <option value="six months">six months</option>
                </select>
              </div>
                  <div className="form-group">
                    <label htmlFor="name">City</label>
                    <select
                      type="text"
                      className="form-control"
                      name="internship_city"
                      placeholder="Enter internship_city"
                      value={this.state.internship_city}
                      onChange={this.onChange}
                    >
                                        <option value="Béja">Béja</option>
                                        <option value="Bizerte">Bizerte</option>
                                        <option value="Gabès">Gabès</option>
                                        <option value="Gafsa">Gafsa</option>
                                        <option value="Jendouba">Jendouba</option>
                                        <option value="Kairouan">Kairouan</option>
                                        <option value="Kasserine">Kasserine</option>
                                        <option value="Kébili">Kébili</option>
                                        <option value="Kef">Kef</option>
                                        <option value="Mahdia">Mahdia</option>
                                        <option value="Médenine">Médenine</option>
                                        <option value="Monastir">Monastir</option>
                                        <option value="Nabeul">Nabeul</option>
                                        <option value="Sfax">Sfax</option>
                                        <option value="Sidi Bouzid">Sidi Bouzid</option>
                                        <option value="Siliana">Siliana</option>
                                        <option value="Sousse">Sousse</option>
                                        <option value="Tataouine">Tataouine</option>
                                        <option value="Tozeur">Tozeur</option>
                                        <option value="Tunis">Tunis</option>
                                        <option value="Zaghouan">Zaghouan</option>
                      </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Type</label>
                    <select
                      type="text"
                      className="form-control"
                      name="internship_type"
                      placeholder="Enter internship_type"
                      value={this.state.internship_type}
                      onChange={this.onChange}
                    >
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Online">Online</option>
                      </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Level</label>
                    <select
                      type="text"
                      className="form-control"
                      name="internship_level"
                      placeholder="Enter internship_level"
                      value={this.state.internship_level}
                      onChange={this.onChange}
                    >
                                    <option value="less than 2 years experience"> less than 2 years experience</option>
                                    <option value="2-5 years experience">2-5 years experience</option>
                                    <option value="more than 5 years experience">more than 5 years experience</option>
                                    <option value="No experience needed">No experience needed</option>
                      </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Field</label>
                    <select
                      type="text"
                      className="form-control"
                      name="internship_field"
                      placeholder="Enter internship_field"
                      value={this.state.internship_field}
                      onChange={this.onChange}
                    >
                                    <option value="Computer & IT">Computer & IT</option>
                                    <option value="Medical & Health">Medical & Health</option>
                                    <option value="Software Development">Software Development</option>
                                    <option value="Project Management">Project Management</option>
                                    <option value="Customer Service">Customer Service</option>
                                    <option value="Account Management">Account Management</option>
                                    <option value="Education">Education</option>
                                    <option value="Accounting & Finance">Accounting & Finance</option>
                                    <option value="Marketing">Marketing</option>
                      </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Begin Date</label>
                    <DatePicker
                      type="text"
                      className="form-control"
                      name="internship_begin_date"
                      placeholder="Enter internship_begin_date"
                      selected={this.state.internship_begin_date}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">End Date</label>
                    <DatePicker
                      type="text"
                      className="form-control"
                      name="internship_end_date"
                      placeholder="Enter your first name"
                      selected={this.state.internship_end_date}
                      onChange={this.handleChange2}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Add Internship
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }
   
}