import React from 'react';
import '../../styles/components/AboutUs/_card.scss'

const Card = ()=>(
    <div className="box" >
            <h6>01</h6>
            <img src={require("../../logos/magnifying-glass.png")} alt="" />
            <h4>Find Opportunity</h4>
            <div className="box_description">
                 <p>find best opportunities</p>
            </div>
    </div>
)

export default Card;