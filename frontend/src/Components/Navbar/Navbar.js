import React from "react";
import './Navbar.css'
import {Link} from "react-router-dom"; 

export default function Navbar()
{
    return(
        <>
            <nav className="container">
                <ul>
                    <Link className="myLink" to="/">Home</Link>
                    <Link className="myLink" to="/News">News</Link>
                    <Link className="myLink" to="/About">About</Link>
                    <Link className="myLink" id="myContact" to="/Contact">Contact us</Link>
                    <Link className="loginBtn" to="/Subscribe">Subscribe</Link>
                </ul>
            </nav>
        </>
    )
}