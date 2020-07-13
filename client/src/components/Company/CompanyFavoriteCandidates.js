import React, { Component } from "react";
import { GetFavorite } from "./CompanyFunctions";
import "../../styles/components/Company/_CompanyCandidates.scss";
import { deleteFavorite_f } from "./CompanyFunctions";
import { inviteFavorite_f } from "./CompanyFunctions";

import Dialog2 from "../Dialog2";
import { Link, withRouter } from "react-router-dom";

class CandidateSavedInterrnships extends Component {
  constructor(props) {
    super(props);

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

      this.setState((prevState) => ({
        ...prevState,
        favorite: fav,
      }));
      console.log(this.props);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="">
          <Dialog2
            isOpen={this.state.error}
            onClose={(e) => {
              this.setState((prevState) => {
                return {
                  ...prevState,
                  error: false,
                };
              });
              this.props.history.push("/company/candidatesPage");
            }}
          >
            {this.state.msg}
          </Dialog2>
        </div>
        {this.state.favorite.map((fav) => (
          <div className="container" id="box_opp3">
            <div className="d-flex justify-content-start">
              <p>
                {" "}
                <h3>
                  {" "}
                  {fav.candidate.candidate_name},{fav.candidate.candidate_city}{" "}
                </h3>
              </p>
            </div>

            <p> Service: {fav.candidate.candidate_service} </p>
            <p>
              {" "}
              Number of experiences: {
                fav.candidate.candidate_nb_experience
              }{" "}
            </p>
            <div className="row justify-content-end">
              <Link to="/" activeClassName="is-active" exact={true}>
                <button id="apply_btn6">See Profil</button>
              </Link>
              <button
                id="apply_btn2"
                onClick={(e) => {
                  deleteFavorite_f(fav.id);
                  this.setState((prevState) => {
                    return {
                      ...prevState,
                      error: true,
                      msg: "Candidate has been deleted from favorites",
                    };
                  });
                }}
              >
                Remove from favorites
              </button>
              <button
                id="apply_btn2"
                onClick={(e) => {
                  inviteFavorite_f(fav.id);
                  this.setState((prevState) => {
                    return {
                      ...prevState,
                      error: true,
                      msg: "Candidate has been invited",
                    };
                  });
                }}
              >
                Invite Candidate{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(CandidateSavedInterrnships);
