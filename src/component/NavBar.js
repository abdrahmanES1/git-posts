import React from "react";
import { Link, BrowserRouter as Router, NavLink } from "react-router-dom";

function NavBar() {
   return (
      <nav>
         <div className="nav-wrapper container">
            <NavLink to="/" className="brand-logo">
               Logo
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/About">About</Link>
               </li>
               <li>
                  <Link to="/Contact">Contact</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default NavBar;
