import React from "react";

const Whyus = () => (
  <div className="flex-container">
    <div className="row">
      <div className="col" id="whyus">
        <h2 id="why_title">Why Us?</h2>
        <br />
        <h5>We will find for you the best opportunities/ talents</h5>
        <h5>
          we are working with a tracker to keep your professional section in
          your CV updated and approved by compannies
        </h5>
      </div>
      <div className="col">
        <img id="whyus_photo" src={require("../../logos/whyus.png")} alt="" />
      </div>
    </div>
  </div>
);

export default Whyus;
