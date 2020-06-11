import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { getCompany } from "./CompanyFunctions";
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
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
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
        </div>
      </div>
    );
  }
}
export default CompanyProfile;