import React from 'react';

const Candidate = ()=>(
    <div className="flex-container">
            <div> 
                <img src={require("../../logos/Asset 2@2x.svg")} id="interphoto"  alt="" /> 
            </div>
        <div id="Intern">
            <h3>ARE YOU LOOKING FOR INTERNSHIP?</h3>
            <br/>
            
            <h5>Tired of looking for companies to pass your internship with ?</h5>
            <h5> We are here for you, you can start applying for opportunities Now </h5>
            <button id="apply_btn">Apply</button>
        </div>
    </div>
)
export default Candidate;