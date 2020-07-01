import React from "react";
import { NavLink } from "react-router-dom";

const Candidate = () => (
  <div className="flex-container">
    <div>
      <img src={require("../../logos/Asset 2@2x.svg")} id="interphoto" alt="" />
    </div>
    <div id="Intern">
      <h3 id="internship_title">ARE YOU LOOKING FOR INTERNSHIP?</h3>
      <br />

      <h5>Tired of looking for companies to pass your internship with ?</h5>
      <h5>
        {" "}
        We are here for you, you can start applying for opportunities Now{" "}
      </h5>
      <button id="apply_btn">
        <NavLink to="/candidate/register" id="navlinkBtn">
          Apply
        </NavLink>{" "}
      </button>
    </div>
  </div>
);
export default Candidate;
