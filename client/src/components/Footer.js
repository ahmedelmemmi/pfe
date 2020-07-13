import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/components/_Footer.scss";



const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Career.tn</h5>
            <p>
            Career.tn first objective is to provide users with advanced search tools such as filtering options
            whether in the search of candidates or in the search of companies.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Useful Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="http://localhost:3000/candidate/internshipsPage">Internships</a>
              </li>
              <li className="list-unstyled">
                <a href="www.devagnos.com">Devagnos</a>
              </li>
              <li className="list-unstyled">
                <a href="http://localhost:3000/candidate/profile">Account</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000/"> Career.tn </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;