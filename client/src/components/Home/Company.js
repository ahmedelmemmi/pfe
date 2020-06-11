import React from 'react';

const Company = ()=>(
    
        <div className="flex-container">
                <div className="row">
                        <div className="col" id="Talent">
                                <h3>ARE YOU LOOKING FOR TALENTS?</h3>
                                <br/>
                                <h5>What are you waiting for !</h5>
                                <h5>Start receiving applications from students NOW</h5>
                                <button id="Post_btn">Post your opportunity</button>
                        </div>
                        <div className="col" >
                                <img id="work_photo" src={require("../../logos/work.png")} alt="" /> 
                        </div>
                </div>
        </div>
   
)

export default Company;