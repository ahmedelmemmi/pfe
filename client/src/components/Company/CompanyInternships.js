import React, { Component } from "react";
import "../../styles/components/Application/_Application1.scss";
import Dialog2 from "../Dialog2";
import { Link, withRouter } from "react-router-dom";
import { myIntern } from "./CompanyFunctions";
import { deleteIntern } from "./CompanyFunctions";

class CompanyInternships extends Component {
  constructor(props) {
    super(props);
    this.fonction = this.fonction.bind(this);
    this.state = {
      intern: [],
      error: false,
      msg: "",
    };
  }
  componentDidMount(props) {
    const token = localStorage.usertoken;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    myIntern(config).then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        intern: res.data.data,
      }));
      console.log(this.state);
    });
    console.log(this.state);
  }
  fonction() {
    alert("Favorite internship has been deleted");
  }
  render() {
    return (
      <div className="row">
        <Dialog2
          isOpen={this.state.error}
          onClose={(e) => {
            this.setState((prevState) => {
              return {
                ...prevState,
                error: false,
              };
            });
          }}
        >
          {this.state.msg}
        </Dialog2>
        <Link
          to="/company/internships/add"
          activeClassName="is-active"
          exact={true}
        >
          <button id="apply_btn8">Add internship</button>
        </Link>
        <div className="boo">
          {this.state.intern.map((internship) => (
            <div className="container" id="box_opp">
              <div className="row">
                <div className="col-4">
                  <img
                    src={require("../../logos/facebook.png")}
                    alt=""
                    id="company"
                  />
                </div>
                <div className="col-8">
                  <div className="texte d-flex justify-content-start">
                    <h5>
                      {" "}
                      {internship.internship_title}
                      <span className="co"> </span>
                      <br />
                      <img
                        id="location1"
                        src={require("../../logos/pin.png")}
                        alt=""
                      />{" "}
                    </h5>
                  </div>
                  <div className="texte2 d-flex justify-content-end">
                    <h6>
                      {" "}
                      {internship.internship_begin_date} |{" "}
                      {internship.internship_end_date}
                    </h6>
                  </div>

                  <p className="texte3">
                    {" "}
                    {internship.internship_duration} |{" "}
                    {internship.internship_type}
                    <br />
                    Description : {internship.internship_description}
                  </p>
                  <div className="row justify-content-end">
                    <div className="col-20">
                      <button
                        id="apply_btn2"
                        onClick={(e) => {
                          deleteIntern(internship.id);
                          this.setState((prevState) => {
                            return {
                              ...prevState,
                              error: true,
                              msg: "Internship has been deleted ",
                            };
                          });
                        }}
                      >
                        Remove Internship
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default CompanyInternships;
