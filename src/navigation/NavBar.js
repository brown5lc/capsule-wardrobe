import React from "react";
//import link from 'next/link'

const Navbar = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
         Capsule Wardrobe
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" link href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" link href="/wardrobes">
              My Wardrobes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" link href="/newClothes">
              Find New Clothes
            </a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" link href="/settings">
              Settings
            </a>
          </li> 
        </ul>
      </div>
    </nav>
    );
}
export default Navbar;