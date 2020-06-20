import React, { Component } from "react";
import { CompanyRegister_f } from "./CompanyFunctions";
import { CompanyLogin_f } from "./CompanyFunctions";
import { Redirect } from "react-router-dom";

class CompanyRegistration extends Component {
  constructor() {
    super();
    this.state = {
     toDashboard: false,
     company_email: "",
     company_password: "",
     company_name: "",
     company_taxcode: "",
     company_phone: "",
     company_adress: "",
     company_field: "",
     company_city: "",
     company_photo: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    
  }
  onSubmit(e) {
    e.preventDefault();

    const newCompany = {
      company_email: this.state.company_email,
      company_password: this.state.company_password,
      company_name: this.state.company_name,
      company_taxcode: this.state.company_taxcode,
      company_phone: this.state.company_phone,
      company_adress: this.state.company_adress,
      company_field: this.state.company_field,
      company_city: this.state.company_city,
      company_photo: this.state.company_photo
    };

    CompanyRegister_f(newCompany).then((res) =>
    
      CompanyLogin_f(newCompany).then((res) => {
        this.setState(() => ({
          toDashboard: true,
        }));
        
      })
    );
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/company/profile" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">full name</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_name"
                  placeholder="Enter your company_name"
                  value={this.state.company_name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="company_email"
                  placeholder="Enter candidate_email"
                  value={this.state.candidate_email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">password</label>
                <input
                  type="password"
                  className="form-control"
                  name="company_password"
                  placeholder="company_password"
                  value={this.state.company_password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">company_taxcode</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_taxcode"
                  placeholder="Enter your company_taxcode"
                  value={this.state.company_taxcode}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">company_adress</label>
                <input
                  className="form-control"
                  name="company_adress"
                  value={this.state.company_adress}
                  onChange={this.onChange}/> 
              </div>
              <div className="form-group">
                <label htmlFor="name">company_field</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_field"
                  placeholder="Enter your company_field"
                  value={this.state.company_field}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">city</label>
                <select
                  type="text"
                  className="form-control"
                  name="company_city"
                  placeholder="Enter company_city"
                  value={this.state.company_city}
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
                <label htmlFor="name">company_phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_phone"
                  placeholder="Enter company_phone"
                  value={this.state.company_phone}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">company_photo</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_photo"
                  placeholder="Enter your first name"
                  value={this.state.company_photo}
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

export default CompanyRegistration;
