import React, { Component } from "react";
import { GetFavorite } from "./CandidateFunctions";
import "../../styles/components/Application/_Application1.scss";
import { deleteApplication } from "./ApplicationsFunctions";
import Dialog2 from "../Dialog2";
import { Link, withRouter } from "react-router-dom";
import { deleteFavorite_f } from "./ApplicationsFunctions";

class CandidateSavedApplication extends Component {
  constructor(props) {
    super(props);
    this.fonction = this.fonction.bind(this);
    this.state = {
      favorite: [],
      error: false,
      msg: "",
    };
  }
  componentDidMount(props) {
    const token = localStorage.usertoken;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    GetFavorite(config).then((res) => {
      const fav = res.data.data;
      console.log(fav);
      this.setState((prevState) => ({
        ...prevState,
        favorite: fav,
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
            this.props.history.push("/candidate/candidatesPage");
          }}
        >
          {this.state.msg}
        </Dialog2>
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
                    <button
                      id="apply_btn2"
                      onClick={(e) => {
                        deleteFavorite_f(fav.id);
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            error: true,
                            msg: "Favorite internship has been removed ",
                          };
                        });
                        console.log(this.state);
                      }}
                    >
                      Remove from favorites
                    </button>
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
export default CandidateSavedApplication;
