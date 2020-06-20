import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { getCompany } from "./CompanyFunctions";
import "../../styles/components/Company/_Company.scss"
class CompanyProfile extends Component {
  constructor() {
    super();
    this.state = {
      company_email: '',
      company_password: '',
      company_name: '',
      company_taxcode: '',
      company_phone: '',
      company_adress: '',
      company_field: '',
      company_city: '',
      company_photo: ''
    };
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    console.log(token)
    const decoded = jwt_decode(token);
    console.log(decoded);
    getCompany(decoded.uid).then(res => {
      console.log(res)
      this.setState({
        company_email: res.data.company_email,
        company_name: res.data.company_name,
        company_taxcode: res.data.company_taxcode,
        company_phone: res.data.company_phone,
        company_adress: res.data.company_adress,
        company_field: res.data.company_field,
        company_city: res.data.company_city,
        company_photo: res.data.company_photo,
      })
    }).catch(err =>{
        console.log(err)
    })
  }
  handleInput = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="container">

        {/* <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{this.state.company_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.company_email}</td>
              </tr> 
              <tr>
                <td>Tax code</td>
                <td>{this.state.company_taxcode}</td>
              </tr>
              <tr>
                <td> Adress</td>
                <td>{this.state.company_adress}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.state.company_city}</td>
              </tr>
              <tr>
                <td>Field</td>
                <td>{this.state.company_field}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{this.state.company_phone}</td>
              </tr>
              <tr>
                <td>Photo</td>
                <td>{this.state.company_photo}</td>
              </tr>
            </tbody>
          </table>
        </div> */}

          <form
            className="border border-gray-500 w-1/2 my-5 rounded"
            onSubmit={this.handleForm}
          >
            <div className="p-4">
              <h1 className="text-lg border-b border-gray-500">
                Profil
              </h1>
              <div className="form-group">
                <label htmlFor="name">full name</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_name"
                  placeholder="Enter your full name"
                  value={this.state.candidate_name}
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company_email">email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="company_email"
                  placeholder="Enter your email"
                  value={this.state.company_email}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">company_taxcode</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_taxcode"
                  value={this.state.company_taxcode}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">company_field</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_field"
                  value={this.state.company_field}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">adress</label>
                <input
                  type="text"
                  className="form-control"
                  name="company_adress"
                  placeholder="Enter your Adress"
                  value={this.state.company_adress}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">city</label>
                <select
                  type="text"
                  className="form-control"
                  name="company_city"
                  placeholder="Enter your first name"
                  value={this.state.company_city}
                  onChange={this.handleInput}
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
                  placeholder="Enter your phone number"
                  value={this.state.company_phone}
                  onChange={this.handleInput}
                />
              </div>
              <div className="mt-4">
                <input
                  type="submit"
                  value="Update"
                  className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 "
                />
              </div>
            </div>
          </form> 
         
     
     


      </div>
    );
  }
}
export default CompanyProfile;