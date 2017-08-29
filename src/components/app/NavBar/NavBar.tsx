import * as React from "react";
import { Link } from "react-router-dom";
import routes from "../../../routes";
import strings from "../../../strings";

import logo from "./logo.svg";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link to={routes.home} className="navbar-brand">
          <span>
            <img src={logo} alt="" />
            {strings.navBar.appName}
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
              <Link to={routes.signUp} className="nav-link">
                {strings.navBar.signUp}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
