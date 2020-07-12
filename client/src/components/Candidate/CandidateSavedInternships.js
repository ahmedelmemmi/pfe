import React, { Component } from "react";
import { GetFavorite } from "./CandidateFunctions";
import "../../styles/components/Application/_Application1.scss";
import { deleteApplication } from "./ApplicationsFunctions";
import Dialog2 from "../Dialog2";
import { Link, withRouter } from "react-router-dom";

class CandidateApplication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: [],
    };
  }
  componentDidMount(props) {
    const token = localStorage.usertoken;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    GetFavorite(config).then((res) => {
      const fav = res.data.data;

      this.setState((prevState) => ({
        ...prevState,
        favorite: fav,
      }));
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.favorite.map((fav) => (
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
                    {fav.internship.internship_title} at :{" "}
                    <span className="co">
                      {fav.internship.company.company_name}
                    </span>
                    <br />
                    <img
                      id="location1"
                      src={require("../../logos/pin.png")}
                      alt=""
                    />{" "}
                    {fav.internship.company.company_city}
                  </h5>
                </div>
                <div className="texte2 d-flex justify-content-end">
                  <h6>
                    {" "}
                    {fav.internship.internship_begin_date} |{" "}
                    {fav.internship.internship_end_date}
                  </h6>
                </div>

                <p className="texte3">
                  {" "}
                  {fav.internship.internship_duration} |{" "}
                  {fav.internship.internship_type}
                  <br />
                  Description : {fav.internship.internship_description}
                </p>
                <div className="row justify-content-end">
                  <div className="col-20">
                    <Link
                      to={"/internship/" + fav.internship.id}
                      activeClassName="is-active"
                      exact={true}
                    >
                      <button id="apply_btn2">See Internship </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default CandidateApplication;
