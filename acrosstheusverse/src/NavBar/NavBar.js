import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          Across the US-Verse ✈️🚌🚄
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink to="/journalentry" className="nav-link active">
              Journal Entries
            </NavLink>
            <NavLink to="region" className="nav-link">
              Regions
            </NavLink>
            <NavLink to="/state" className="nav-link">
              States
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
