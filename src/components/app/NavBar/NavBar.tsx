import * as React from "react";
import strings from "../../../strings";
import { Link } from "react-router-dom";

import logo from "./logo.svg";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span>
            <img src={logo} alt="" />
            {strings.NavBar.appName}
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-md-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                {strings.NavBar.signIn}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
