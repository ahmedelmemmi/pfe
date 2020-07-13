import React, { Component } from "react";
import CompanyFavoriteCandidates from "./CompanyFavoriteCandidates";
import CompanyCandidates from "./CompanyCandidates";
import AllCandidates from "./AllCandidates";
class CandidatesPage extends Component {
  constructor(props) {
    super(props);
    this.ToggleVisibility_search = this.ToggleVisibility_search.bind(this);
    this.ToggleVisibility_favorite = this.ToggleVisibility_favorite.bind(this);
    this.ToggleVisibility_mycandidates = this.ToggleVisibility_mycandidates.bind(
      this
    );

    this.state = {
      visibility_mycandidates: false,
      visibility_favorite: false,
      visibility_search: true,
    };
  }
  ToggleVisibility_search() {
    this.setState(() => {
      return {
        visibility_mycandidates: false,
        visibility_favorite: false,
        visibility_search: true,
      };
    });
  }
  ToggleVisibility_mycandidates() {
    this.setState(() => {
      return {
        visibility_mycandidates: true,
        visibility_favorite: false,
        visibility_search: false,
      };
    });
  }
  ToggleVisibility_favorite() {
    this.setState(() => {
      return {
        visibility_mycandidates: false,
        visibility_favorite: true,
        visibility_search: false,
      };
    });
  }
  render() {
    return (
      <div>
        <div className="btnX">
          <button className="InternBtn1" onClick={this.ToggleVisibility_search}>
            Search Candidates
          </button>
          <button
            className="InternBtn1"
            onClick={this.ToggleVisibility_mycandidates}
          >
            Applied Candidates
          </button>
          <button
            className="InternBtn1"
            onClick={this.ToggleVisibility_favorite}
          >
            Favorite Candidates
          </button>
        </div>
        <div className="">
          {" "}
          {this.state.visibility_search && <AllCandidates></AllCandidates>}
          {this.state.visibility_favorite && (
            <CompanyFavoriteCandidates></CompanyFavoriteCandidates>
          )}
          {this.state.visibility_mycandidates && (
            <CompanyCandidates></CompanyCandidates>
          )}
        </div>
      </div>
    );
  }
}

export default CandidatesPage;
