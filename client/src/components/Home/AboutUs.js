import React from "react";
import Card from "./Card";
import Find from "../../logos/magnifying-glass.png";
import Apply from "../../logos/submit.png";
import GetInTouch from "../../logos/job-interview.png";
import GetInternship from "../../logos/teamwork.png";

export default class AboutUs extends React.Component {
  render() {
    const mystyle1 = {
      color: "#F63761",
    };
    const mystyle2 = {
      color: "#34CACF",
    };
    const mystyle3 = {
      color: "#AEDD47",
    };
    const mystyle4 = {
      color: "#173F58",
    };
    return (
      <div className="container">
        <div className="row">
          <h2>How it works</h2>
        </div>
        <div className="row">
          <div style={mystyle1} className="col-20">
            <Card
              number="01"
              img={Find}
              title="Find opportunity "
              description="Find the best opportunities and
                        pick the right ones that suits 
                        your skills"
            />
          </div>

          <div style={mystyle2} className="col-20">
            <Card
              number="02"
              img={Apply}
              title="Apply"
              description="apply for the job 
                        by clicking on apply 
                        and for the company "
            />
          </div>

          <div style={mystyle3} className="col-20">
            <Card
              img={GetInTouch}
              number="03"
              title="Get in touch"
              description=" the company will contact
                        you for an interview"
            />
          </div>

          <div style={mystyle4} className="col-20">
            <Card
              img={GetInternship}
              number="04"
              title="Get the internship"
              description="Once accepted after the interview
                        the company will contact you 
                        and your internship is On!"
            />
          </div>
        </div>
      </div>
    );
  }
}
