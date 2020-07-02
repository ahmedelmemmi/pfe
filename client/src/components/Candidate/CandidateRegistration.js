import React, { Component } from "react";
import { CandidateRegister_f } from "./CandidateFunctions";
import { Link, withRouter } from "react-router-dom";
import { CandidateLogin_f } from "./CandidateFunctions";

import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class CandidateRegistration extends Component {
  constructor() {
    super();
    this.state = {
      toDashboard: false,
      candidate_candidate_email: "",
      candidate_candidate_password: "",
      candidate_name: "",
      candidate_service: "",
      candidate_gender: "",
      candidate_nb_experience: "",
      candidate_adress: "",
      candidate_city: "",
      candidate_phone: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newCandidate = {
      candidate_email: this.state.candidate_email,
      candidate_password: this.state.candidate_password,
      candidate_name: this.state.candidate_name,
      candidate_service: this.state.candidate_service,
      candidate_gender: this.state.candidate_gender,
      candidate_nb_experience: this.state.candidate_nb_experience,
      candidate_adress: this.state.candidate_adress,
      candidate_city: this.state.candidate_city,
      candidate_phone: this.state.candidate_phone,
    };

    CandidateRegister_f(newCandidate).then((res) =>
      CandidateLogin_f(newCandidate).then((res) => {
        this.setState(() => ({
          toDashboard: true,
        }));
      })
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
              <h1 className="h3 mb-3 font-weight-normal">
                Register as a candidate
              </h1>
              <div className="form-group">
                <label htmlFor="name">full name</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_name"
                  placeholder="Enter your full name"
                  value={this.state.candidate_name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="candidate_email">email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="candidate_email"
                  placeholder="Enter your email"
                  value={this.state.candidate_email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="candidate_password">password</label>
                <input
                  type="password"
                  className="form-control"
                  name="candidate_password"
                  placeholder="set your password"
                  value={this.state.candidate_password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">service</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_service"
                  value={this.state.candidate_service}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">gender</label>
                <select
                  type="text"
                  className="form-control"
                  name="candidate_gender"
                  value={this.state.value}
                  onChange={this.onChange}
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">number of experiences</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_nb_experience"
                  placeholder="experiences number ?"
                  value={this.state.candidate_nb_experience}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">adress</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_adress"
                  placeholder="Enter your first name"
                  value={this.state.candidate_adress}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">city</label>
                <select
                  type="text"
                  className="form-control"
                  name="candidate_city"
                  placeholder="Enter your first name"
                  value={this.state.candidate_city}
                  onChange={this.onChange}
                >
                  <option value="Béja">Beja</option>
                  <option value="Bizerte">Bizerte</option>
                  <option value="Gabès">Gabes</option>
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
                <label htmlFor="name">candidate_phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_phone"
                  placeholder="Enter your first name"
                  value={this.state.candidate_phone}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default CandidateRegistration;
