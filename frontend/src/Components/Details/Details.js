import React from 'react'
import './Details.css'
import {Link, useLocation} from "react-router-dom";

export default function Details(props) {
    
    const location = useLocation() 
    console.log(location.state)

    return (
        <>
            <div className="DetailsContainer">
                <span>BANKNAME</span>
                <ul>
                    <li>
                        <span>BookValue </span>
                        <span className="mySpan" style={{marginLeft: "30px"}}>{ location.state.BookValue}</span>
                        
                    </li>
                    <li>
                        <span>CurrentPrice </span>
                        <span className="mySpan" style={{marginLeft: "30px"}}>{location.state.CurrentPrice}</span>
                         
                    </li>
                    <li>
                        <span>DividendYield </span>
                        <span className="mySpan" style={{marginLeft: "30px"}}>{location.state.DividendYield}</span>
                     
                    </li>
                    <li>
                        <span>FaceValue  </span>
                        <span className="mySpan" style={{marginLeft: "36px"}}>{location.state.FaceValue}</span>
                    
                    </li>
                    <li>
                        <span>High </span>
                        <span className="mySpan" style={{marginLeft: "86px"}}>{location.state.High}</span>
                     
                    </li>
                    <li>
                        <span>Low </span>
                        <span className="mySpan" style={{marginLeft: "98px"}}>{location.state.Low}</span>
                     
                    </li>
                    <li>
                        <span>MarketCap </span>
                        <span className="mySpan" style={{marginLeft: "26px"}}>{location.state.MarketCap}</span>
                     
                    </li>
                    <li>
                        <span>ROC </span>
                        <span className="mySpan" style={{marginLeft: "86px"}}>{location.state.ROC}</span>
                    
                    </li>
                    <li>
                        <span>  ROE </span>
                        <span className="mySpan" style={{marginLeft: "100px"}}>{location.state.ROE}</span>
                    
                    </li>
                </ul>
                <Link to="/" id="linkId">Clear</Link>
            </div>
        </>
    )
}

