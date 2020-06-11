// import React, { Component } from "react";
// import jwt_decode from "jwt-decode";
// import { getCandidate } from "./CandidateFunctions";
// import Job from "./Job";

// class CandidateProfile extends Component {
//   constructor() {
//     super();
//     this.state = {
//       candidate_candidate_email: "",
//       candidate_candidate_password: "",
//       candidate_name: "",
//       candidate_service: "",
//       candidate_gender: "",
//       candidate_nb_experience: "",
//       candidate_adress: "",
//       candidate_city: "",
//       candidate_phone: "",
//       candidate_photo: "",
//     };
//   }

//   componentDidMount() {
//     const token = localStorage.usertoken;
//     const decoded = jwt_decode(token);
//     getCandidate(decoded.uid).then((res) => {
//       this.setState({
//         candidate_email: this.state.candidate_email,
//         candidate_password: this.state.candidate_password,
//         candidate_name: this.state.candidate_name,

//         candidate_service: this.state.candidate_service,
//         candidate_gender: this.state.candidate_gender,
//         candidate_nb_experience: this.state.candidate_nb_experience,
//         candidate_adress: this.state.candidate_adress,
//         candidate_city: this.state.candidate_city,
//         candidate_phone: this.state.candidate_phone,
//         candidate_photo: this.state.candidate_photo,
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="jumbotron mt-5">
//           <div className="col-sm-8 mx-auto">
//             <h1 className="text-center">PROFILE</h1>
//           </div>
//           <table className="table col-md-6 mx-auto">
//             <tbody>
//               <tr>
//                 <td>Fist Name</td>
//                 <td>{this.state.candidate_name}</td>
//               </tr>

//               <tr>
//                 <td>Email</td>
//                 <td>{this.state.candidate_email}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default CandidateProfile;
