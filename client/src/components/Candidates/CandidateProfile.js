import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { getCandidate } from "./CandidateFunctions";
import CandidateSkills from "./CandidateSkills"
import CandidateExperience from "./CandidateExperience"
import CandidateEducation from "./CandidateEducation"
import "../../styles/components/Candidate/_Candidate.scss"
import "../../styles/components/Candidate/_CandidateSkills.scss"
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
        // candidate_photo: res.data.candidate_photo,
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
  handleForm(e) {
    e.preventDefault();

    const newCandidate = {
      candidate_email: this.state.candidate_email,
      candidate_name: this.state.candidate_name,
      candidate_service: this.state.candidate_service,
      candidate_gender: this.state.candidate_gender,
      candidate_nb_experience: this.state.candidate_nb_experience,
      candidate_adress: this.state.candidate_adress,
      candidate_city: this.state.candidate_city,
      candidate_phone: this.state.candidate_phone,
      candidate_photo: this.state.candidate_photo,
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col">
            <div className="btn-group">
                <button>Profil details</button>
                <button>Settings</button>
            </div>
        </div>
        <div className="col-10">
      

         {/* <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-left">PROFILE</h1>
          </div>
          <div className="col-sm-2 ">
          <img src={require("../../logos/edit-tools.png")} id="edit" alt=""/>
          </div>
          
          <table className="table col-md-6 mx-auto">
            <tbody>
              
              <tr>
                
                <td>
                <img src={require("../../logos/ester.jpg")} className="rounded float-left mx-auto d-block ester" alt=""/>
                </td>
                </tr>
              <tr>  
                <td>Full Name</td>
                <td className="caseStyle">{this.state.candidate_name}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td className="caseStyle" onChange={this.updateInputValue} >{this.state.candidate_gender}</td>
              </tr> 
              <tr>
                <td>Email</td>
                <td className="caseStyle">{this.state.candidate_email}</td>
              </tr> 
              <tr>
                <td>Number of experiences</td>
                <td className="caseStyle">{this.state.candidate_nb_experience}</td>
              </tr>
              <tr>
                <td>Adress</td>
                <td className="caseStyle">{this.state.candidate_adress}</td>
              </tr> 
              <tr>
                <td>City</td>
                <td className="caseStyle">{this.state.candidate_city}</td>
              </tr>
             <tr>
                <td>Service</td>
                <td className="caseStyle">{this.state.candidate_service}</td>
              </tr> 
              <tr>
                <td>Phone</td>
                <td className="caseStyle">{this.state.candidate_phone}</td>
              </tr> 
              
            </tbody>
          </table>
        </div>  */}




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
                <label htmlFor="candidate_email">email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="candidate_email"
                  placeholder="Enter your email"
                  value={this.state.candidate_email}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">service</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_service"
                  value={this.state.candidate_service}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">gender</label>
                <select
                  className="form-control"
                  name="candidate_gender"
                  value={this.state.value}
                  onChange={this.handleInput}> 
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
                  onChange={this.handleInput}
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
                  onChange={this.handleInput}
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
                <label htmlFor="name">candidate_phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="candidate_phone"
                  placeholder="Enter your first name"
                  value={this.state.candidate_phone}
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
          <CandidateSkills/>
          <CandidateExperience />
          <CandidateEducation />
      </div>
      </div>
      
    );
    
  }
}
export default CandidateProfile;