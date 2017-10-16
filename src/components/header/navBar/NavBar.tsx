import * as React from "react";
import { Link } from "react-router-dom";
import { homePath, signUpPath, sitesPath } from "../../../routes/paths";
import strings from "../../../strings";

import logo from "./logo.svg";

import "./NavBar.css";

interface INavBarProps {
  readonly searchTerm: string;
  readonly isAuthenticated: boolean;
  readonly currentLocation: string;
  handleSignOut: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NavBar(props: INavBarProps) {
  let authenticationLink = (
    <Link to={signUpPath} className="nav-link">
      {strings.navBar.signUp}
    </Link>
  );

  if (props.isAuthenticated) {
    authenticationLink = (
      <a href="#" onClick={props.handleSignOut} className="nav-link">
        {strings.navBar.signOut}
      </a>
    );
  }

  let searchDisplay = "d-none";

  if (props.currentLocation === sitesPath) {
    searchDisplay = "d-none d-md-flex";
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={homePath} className="navbar-brand">
          <img
            src={logo}
            className="brand-logo d-inline-block align-top"
            alt=""
          />
          {strings.navBar.appName}
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
          <form className={`form-inline ${searchDisplay}`}>
            <label className="sr-only" htmlFor="search">
              {strings.navBar.searchLabel}
            </label>
            <div className="input-group mb-2 mb-sm-0">
              <div className="input-group-addon">
                <span className="fa fa-search" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder={strings.navBar.searchPlaceholder}
                value={props.searchTerm}
                onChange={props.handleSearchTermChange}
              />
            </div>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {authenticationLink}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
