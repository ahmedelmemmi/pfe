import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { getCandidate } from "./CandidateFunctions";
class CandidateProfile extends Component {
  constructor() {
    super();
    this.state = {
      candidate_email: '',
      candidate_name: '',
      candidate_service: '',
      candidate_gender: '',
      candidate_nb_experience: '',
      candidate_adress: '',
      candidate_city: '',
      candidate_phone: '',
      candidate_photo: ''
    };
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(decoded)
    getCandidate(decoded.uid).then(res => {
      console.log(res)
      this.setState({
        candidate_email: res.data.candidate_email,
        candidate_name: res.data.candidate_name,
        candidate_service: res.data.candidate_service,
        candidate_gender: res.data.candidate_gender,
        candidate_nb_experience: res.data.candidate_nb_experience,
        candidate_adress: res.data.candidate_adress,
        candidate_city: res.data.candidate_city,
        candidate_phone: res.data.candidate_phone,
        candidate_photo: res.data.candidate_photo,
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
                <td>Fist Name</td>
                <td>{this.state.candidate_name}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.state.candidate_gender}</td>
              </tr> 
              <tr>
                <td>Email</td>
                <td>{this.state.candidate_email}</td>
              </tr> 
              <tr>
                <td>Number of experiences</td>
                <td>{this.state.candidate_nb_experience}</td>
              </tr>
              <tr>
                <td>Adress</td>
                <td>{this.state.candidate_adress}</td>
              </tr> 
              <tr>
                <td>City</td>
                <td>{this.state.candidate_city}</td>
              </tr>
             <tr>
                <td>Service</td>
                <td>{this.state.candidate_service}</td>
              </tr> 
               
               
              <tr>
                <td>Phone</td>
                <td>{this.state.candidate_phone}</td>
              </tr> 
              <tr>
                <td>Photo</td>
                <td>{this.state.candidate_photo}</td>
              </tr>  
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default CandidateProfile;