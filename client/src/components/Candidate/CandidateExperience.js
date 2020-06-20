import React, { Component } from "react";
import { ExperienceRegister_f } from "./ExperienceFunctions";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class AddExperience extends Component{
    constructor() {
        super();
        this.state = {
         toDashboard: false,
         ex_company: "",
         ex_city: "",
         ex_title: "",
         ex_begin_date: "",
         ex_end_date: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
      }
      onSubmit(e) {
        e.preventDefault();
    
        const newExperience = {
            ex_company: this.state.ex_company,
            ex_city: this.state.ex_city,
            ex_title: this.state.ex_title,
            ex_begin_date: this.state.ex_begin_date,
            ex_end_date: this.state.ex_end_date
        };
    
        ExperienceRegister_f(newExperience).then((res) =>
        
          
            this.setState(() => ({
              toDashboard: true,
            }))
            
         
        );
      }
      handleChange = date => {
        this.setState({
            ex_begin_date: date
        });
      };
      handleChange2 = date => {
        this.setState({
            ex_end_date:date
        });
      };
      render() {
        if (this.state.toDashboard === true) {
          return <Redirect to="/candidate/profile" />;
        }
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Add new Experience</h1>
                  <div className="form-group">
                    <label htmlFor="name">ex_company</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ex_company"
                      placeholder="Enter your ex_company"
                      value={this.state.ex_company}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">ex_title</label>
                    <input
                      type="email"
                      className="form-control"
                      name="ex_title"
                      placeholder="Enter your  ex_title"
                      value={this.state.ex_title}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">City</label>
                    <select
                      type="text"
                      className="form-control"
                      name="ex_city"
                      placeholder="Enter ex_city"
                      value={this.state.ex_city}
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
                    <label htmlFor="name">Begin Date</label>
                    <DatePicker
                      type="text"
                      className="form-control"
                      name="ex_begin_date"
                      placeholder="Enter ex_begin_date"
                      selected={this.state.ex_begin_date}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">End Date</label>
                    <DatePicker
                      type="text"
                      className="form-control"
                      name="ex_end_date"
                      placeholder="Enter your first name"
                      selected={this.state.ex_end_date}
                      onChange={this.handleChange2}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Add Experience
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }
   
}